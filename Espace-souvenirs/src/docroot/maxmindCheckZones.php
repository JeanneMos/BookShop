<?php

require_once 'autoload.php';
use Drupal\Core\Serialization\Yaml;
define('DRUPAL_DIR', getcwd ());


$listCodeTelephonique = [
	'01'=>'04',
	'02'=>'03',
	'03'=>'04',
	'04'=>'04',
	'05'=>'04',
	'06'=>'04',
	'07'=>'04',
	'08'=>'03',
	'09'=>'05',
	'10'=>'03',
	'11'=>'04',
	'12'=>'05',
	'13'=>'04',
	'14'=>'02',
	'15'=>'04',
	'16'=>'05',
	'17'=>'05',
	'18'=>'02',
	'19'=>'05',
	'2A'=>'04',
	'2B'=>'04',
	'21'=>'03',
	'22'=>'02',
	'23'=>'05',
	'24'=>'05',
	'25'=>'03',
	'26'=>'04',
	'27'=>'02',
	'28'=>'02',
	'29'=>'02',
	'30'=>'04',
	'31'=>'05',
	'32'=>'05',
	'33'=>'05',
	'34'=>'04',
	'35'=>'02',
	'36'=>'02',
	'37'=>'02',
	'38'=>'04',
	'39'=>'03',
	'40'=>'05',
	'41'=>'02',
	'42'=>'04',
	'43'=>'04',
	'44'=>'02',
	'45'=>'02',
	'46'=>'05',
	'47'=>'05',
	'48'=>'04',
	'49'=>'02',
	'50'=>'02',
	'51'=>'03',
	'52'=>'03',
	'53'=>'02',
	'54'=>'03',
	'55'=>'03',
	'56'=>'02',
	'57'=>'03',
	'58'=>'03',
	'59'=>'03',
	'60'=>'03',
	'61'=>'02',
	'62'=>'03',
	'63'=>'04',
	'64'=>'05',
	'65'=>'05',
	'66'=>'04',
	'67'=>'03',
	'68'=>'03',
	'69'=>'04',
	'70'=>'03',
	'71'=>'03',
	'72'=>'02',
	'73'=>'04',
	'74'=>'04',
	'75'=>'01',
	'76'=>'02',
	'77'=>'01',
	'78'=>'01',
	'79'=>'05',
	'80'=>'03',
	'81'=>'05',
	'82'=>'05',
	'83'=>'04',
	'84'=>'04',
	'85'=>'02',
	'86'=>'05',
	'87'=>'05',
	'88'=>'03',
	'89'=>'03',
	'90'=>'03',
	'91'=>'01',
	'92'=>'01',
	'93'=>'01',
	'94'=>'01',
	'95'=>'01',
	'971'=>'05',
	'972'=>'05',
	'973'=>'05',
	'974'=>'02',
	'975'=>'05',
	'976'=>'02',
	'977'=>'05',
	'978'=>'05',

];

$currentEnv = getenv('CURRENT_ENV');
if(in_array($currentEnv, ['prod', 'pp', 'int', 'rec'])){
	$confWebservices = '../../src/config/sync-override/pfg/'.$currentEnv.'/ogf_webservices.settings.yml';
}else{
	$confWebservices = '../../src/config/sync/ogf_webservices.settings.yml';
}

$contentConfig = Yaml::decode(file_get_contents($confWebservices));

const API_GEOLOC_URL          = '/api/geolocalisationip/';
const API_RECHERCHE           = '/api/agences/{latitude}/{longitude}/{nombreMax}';

$returnTags = [];

if ((isset($_COOKIE['codetarifprestation']) && !empty($_COOKIE['codetarifprestation'])) && (isset($_COOKIE['codetariffourniture']) && !empty($_COOKIE['codetariffourniture'])) && (isset($_COOKIE['zonetel']) && !empty($_COOKIE['zonetel']))) {
	header('codetarifprestation: '.$_COOKIE['codetarifprestation']);
	header('codetariffourniture: '.$_COOKIE['codetariffourniture']);
	header('zonetel: '.$_COOKIE['zonetel']);
}

else {
	if (isset($contentConfig['storelocator'])) {
		try {
			$storeLocatorUrl = $contentConfig['storelocator'];

			if (preg_match('/(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})/m', $_GET['ipUser'], $aIpParameter, PREG_OFFSET_CAPTURE, 0)) {
				$ipParameter = $aIpParameter[0][0];
				$recherche = $storeLocatorUrl . API_GEOLOC_URL . $ipParameter;
				$return = json_decode(file_get_contents($recherche), TRUE);

				if (isset($return['OK']) && $return['OK'] && isset($return['Latitude']) && isset($return['Longitude'])) {
					$sUrlRecherche = $storeLocatorUrl . str_replace(
							['{latitude}', '{longitude}', '{nombreMax}'],
							[$return['Latitude'], $return['Longitude'], 1],
							API_RECHERCHE
						);

					if (isset($_COOKIE['codetarifprestation']) && !empty($_COOKIE['codetarifprestation'])) {
						$returnAgence = [];
						header('codetarifprestation: ' . $_COOKIE['codetarifprestation']);
						header('codetariffourniture: ' . $_COOKIE['codetarifourniture']);
						header('zonetel: ' . $_COOKIE['zonetel']);
					} else {
						$returnAgence = json_decode(file_get_contents($sUrlRecherche), true);
						if (isset($returnAgence['OK']) && $returnAgence['OK'] && isset($returnAgence['Lieux']) && sizeof($returnAgence['Lieux']) == 1) {
							$aAgence = current($returnAgence['Lieux']);
							$returnTags['CodeTarifPrestation'] = $aAgence['CodeTarifPrestation'];
							$returnTags['CodeTarifFourniture'] = $aAgence['CodeTarifFourniture'];
							$cp = $aAgence['CodePostal'];
							// code téléphonique
							$cp = str_pad($cp, 5, '0', STR_PAD_LEFT);
							$codeDept = substr($cp, 0, 2);
							if (isset($listCodeTelephonique[$codeDept])) {
								$returnTags['zoneTel'] = $listCodeTelephonique[$codeDept];
							}
						}
						if ($returnTags['CodeTarifPrestation']) {
							header('codetarifprestation: ' . $returnTags['CodeTarifPrestation']);
							setcookie('codetarifprestation', $returnTags['CodeTarifPrestation']);
						}

						if ($returnTags['CodeTarifFourniture']) {
							header('codetariffourniture: ' . $returnTags['CodeTarifFourniture']);
							setcookie('codetariffourniture', $returnTags['CodeTarifFourniture']);
						}

						if ($returnTags['zoneTel']) {
							header('zonetel: ' . $returnTags['zoneTel']);
							setcookie('zoneTel', $returnTags['zoneTel']);
						}
					}
				}
			}
		} catch (Exception $e) {

		}
	}
}


echo json_encode($returnTags);