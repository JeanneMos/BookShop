<?php


define('DRUPAL_DIR', getcwd());

use Drupal\Core\Database\ConnectionNotDefinedException;
use Drupal\Core\Database\Database;
use Drupal\Core\DrupalKernel;
use Drupal\Core\Site\Settings;
use Drupal\redis\Client\PhpRedis;
use Symfony\Component\HttpFoundation\Request;
use Drupal\ogf_agencies_import\Services\AgenceWebservice;

$bootstrapStart = TRUE;

try {

  require_once DRUPAL_DIR . '/core/includes/database.inc';
  require_once DRUPAL_DIR . '/core/includes/schema.inc';
  // Specify relative path to the drupal root.
  $autoloader = require_once DRUPAL_DIR . '/autoload.php';

  $request = Request::createFromGlobals();

  // Bootstrap drupal to different levels
  $kernel = DrupalKernel::createFromRequest($request, $autoloader, 'prod');
  $kernel->boot();
  $kernel->prepareLegacyRequest($request);

}
catch (Exception $errorBoot) {
  $bootstrapStart = FALSE;
}


$errorDatabase = FALSE;
$errorRedis = FALSE;
$errorPublic = FALSE;

$errorIdqCP = FALSE;
$errorIdqValidAddress = FALSE;
$errorStoreLoc = FALSE;
$errorPivotal = FALSE;
$errorEadc = FALSE;
$errorProduitsReferentiel = FALSE;
$errorProduitsListe = FALSE;
$errorMonuments = FALSE;
if ($bootstrapStart) {

  $conf = \Drupal::configFactory()->get('ogf_webservices.settings')->get();

  try {
    $connection = Database::getConnection('default');
  }
  catch (ConnectionNotDefinedException $e) {
    $errorDatabase = TRUE;
  }


  // Test Redis Connection
  $vm = [
    'host' => Settings::get('redis.connection')['host'],
    'port' => Settings::get('redis.connection')['port'],
  ];

  $redis = new PhpRedis();
  try {
    $redis->getClient($vm['host'], $vm['port']);
  }
  catch (\RedisException $e) {
    $errorRedis = TRUE;
  }

  // Test if site default files is writable
  $errorPublic = !is_writable('public://');


  try {
    $client = new SoapClient($conf['idq_host'] . "/DataIntegrationService/WebService/SW_Get_CP_Ville/", [
      'trace' => TRUE,
      'connection_timeout' => 5,
    ]);
    $response = $client->__getFunctions();
  }
  catch (Exception $fault) {
    \Drupal::logger('supervisionDrupal')
      ->error('IDQ CP : ' . $fault->getMessage());
    $errorIdqCP = TRUE;
  }

  try {
    $client = new SoapClient($conf['idq_host'] . "/DataIntegrationService/WebService/FW_Valid_address/", [
      'trace' => TRUE,
      'connection_timeout' => 5,
    ]);
    $response = $client->__getFunctions();
  }
  catch (Exception $fault) {
    \Drupal::logger('supervisionDrupal')
      ->error('IDQ Address : ' . $fault->getMessage());
    $errorIdqValidAddress = TRUE;
  }


  try {
    $client = new SoapClient($conf['pivotal_host'] . "/interfacesvc.asmx?wsdl", [
      'trace' => TRUE,
      'connection_timeout' => 5,
    ]);
    $response = $client->__getFunctions();
  }
  catch (Exception $fault) {
    \Drupal::logger('supervisionDrupal')
      ->error('Pivotal : ' . $fault->getMessage());
    $errorPivotal = TRUE;
  }

  try {
    $return = Drupal::httpClient()
      ->get($conf['storelocator'] . AgenceWebservice::API_AGENCES);
    if ($return->getStatusCode() != 200) {
      $errorStoreLoc = TRUE;
    }
  }
  catch (Exception $fault) {
    \Drupal::logger('supervisionDrupal')
      ->error('StoreLocator : ' . $fault->getMessage());
    $errorStoreLoc = TRUE;
  }

  try {
    $conf_add = \Drupal::configFactory()->get('ogf_avis_deces.eadc_settings');
    $return = Drupal::httpClient()
      ->get($conf_add->get('obituary_base_url') . $conf_add->get('obituary_list_uri'));
    if ($return->getStatusCode() != 200) {
      $errorEadc = TRUE;
    }
  }
  catch (Exception $fault) {
    \Drupal::logger('supervisionDrupal')
      ->error('EADC : ' . $fault->getMessage());
    $errorEadc = TRUE;
  }

  try {
    /**
     * @var \Drupal\sr_webservices\ServicesProduits $oServicesProduits
     */
    $oServicesProduits = \Drupal::service('ogf_product.services_produits');

    $aReferentiels = $oServicesProduits->getReferentiels();
    $aProduits = $oServicesProduits->getProduits();
    $aMonuments = $oServicesProduits->getMonuments(TRUE);

    if (empty($aReferentiels)) {
      $errorProduitsReferentiel = TRUE;
    }

    if (empty($aProduits)) {
      $errorProduitsListe = TRUE;
    }

    if (empty($aMonuments)) {
      $errorMonuments = TRUE;
    }

  }
  catch (Exception $fault) {
    $errorProduitsReferentiel = TRUE;
    $errorProduitsListe = TRUE;
    $errorMonuments = TRUE;
  }
}

echo('BOOTSTRAP LOADED : ' . (!$bootstrapStart ? 'NOT OK' . ' ' . $errorBoot->getMessage() : 'OK') . '<br/>');
echo('DB CONNECTION : ' . ($errorDatabase ? 'NOT OK' : 'OK') . '<br/>');
echo('REDIS CONNECTION : ' . ($errorRedis ? 'NOT OK' : 'OK') . '<br/>');
echo('public:// status : ' . ($errorPublic ? 'NOT OK' : 'OK') . '<br/>');
if ($bootstrapStart) {
  echo('Webservice IDQ CP: ' . ($errorIdqCP ? 'NOT OK' : 'OK') . '<br/>');
  echo('Webservice IDQ ValidAdresse : ' . ($errorIdqValidAddress ? 'NOT OK' : 'OK') . '<br/>');
}
echo('Webservice Store Locator : ' . ($errorStoreLoc ? 'NOT OK' : 'OK') . '<br/>');
if ($bootstrapStart) {
  echo('Webservice Pivotal : ' . ($errorPivotal ? 'NOT OK' : 'OK') . '<br/>');
}
if ($bootstrapStart) {
  echo('Webservice EADC : ' . ($errorEadc ? 'NOT OK' : 'OK') . '<br/>');
}

if ($bootstrapStart) {
  echo('Webservice Produits Referentiel : ' . ($errorProduitsReferentiel ? 'NOT OK' : 'OK') . '<br/>');
}

if ($bootstrapStart) {
  echo('Webservice Produits Liste : ' . ($errorProduitsListe ? 'NOT OK' : 'OK') . '<br/>');
}

if ($bootstrapStart) {
  echo('Webservice Configurateur Monuments : ' . ($errorMonuments ? 'NOT OK' : 'OK') . '<br/>');
}
