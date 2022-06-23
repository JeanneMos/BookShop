const prestations = [
  {
    field_prest_image: [
      {
        image_style: null,
        url: "http://espace-souvenir.aks-dev.ogf.fr/sites/default/files/prestation/MicrosoftTeams-image_0.png",
        title: "",
        alt: "alt",
        width: 1200,
        height: 630,
      },
    ],
    field_prest_titre: "Offrir des fleurs",
    field_prest_description:
      "C&#039;est un texte pour le module Prestation Fleurs.<br />\r\nCeci est pour remplacer lorem ipsum qui est certes très beau, mais ne vient malheureusement pas du coeur.",
    field_prest_url: {
      url: "https://pfg.fr",
      title: "Commander des fleurs",
      attributes: {
        attributes: {
          activate_sso_link: 0,
        },
        external: true,
      },
    },
  },
];
export const initialglobalInfoState = {
  field_es_civility: "Mme",
  field_es_avis: {
    datepublication: "2022-05-31T09:30:54+02:00",
    statut_fk: {
      id_pk: 1,
      libelle: "Publié",
    },
    defunt_fk: {
      civilite_fk: {
        libelle: "Monsieur",
      },
      nom: "RAJNAK",
      nomjeunefille: null,
      prenom: "Thierry",
      datedeces: "2022-05-27T00:00:00+02:00",
      codepostal: "78000",
      commune: "versailles",
      photo: [],
    },
    lieux: [],
  },
  field_es_surname: "DUBOIS",
  field_nom_de_naissance: "SEULBOIS",
  field_es_name: "Marie",
  field_es_banner: null,
  field_es_birthday: "1937-06-07",
  field_es_death_date: "2022-04-05",
  field_es_marque: {
    field_marque_system_name: "pfg",
    field_marque_domain: "pfg.fr",
    field_marque_prestation: null,
    field_marque_emc: true,
    field_marque_add_public: true,
  },
  field_es_homage:
    "Chère famille, chers amis,<br />\r\nCet espace privé est destiné à recueillir vos témoignages",
  field_es_bio: {
    field_bio_custom: false,
    field_bio_story: "Vous n&#039;avez pas encore rédigé de biographie...",
    field_bio_photo: [
      [
        {
          image_style: null,
          url: "http://espace-souvenir.aks-dev.ogf.fr/sites/default/files/biographie/2022-04/istockphoto-664624250-612x612.jpg",
          title: "",
          alt: "CoolLife",
          width: 612,
          height: 423,
        },
      ],
    ],
  },
  field_es_agency: {
    agency_name: "PFG - SERVICES FUNÉRAIRES",
    agency_marque: "PFG",
    agency_address: "3 Place de l'Hôtel de Ville",
    agency_postal_code: "51100",
    agency_town: "REIMS",
    agency_phone: "03 26 88 58 40",
    agency_url:
      "https://www.pfg.fr/nos-agences/marne/reims/agence-pompes-funebres-pfg-reims-aubry",
  },
  field_es_avis_id: "10202",
  field_ville_de_naissance: "Sartrouville",
  field_cp_de_naissance: "78500",
  field_ville_de_deces: "Aubervilliers",
  field_cp_de_deces: "93300",
};

export const currentUser = {
  lastName: "Dupont",
  firstName: "Nicolas",
  phone: null,
  email: "email@email.com",
  civility: "Mme",
  gp_entities: ["1"],
};

export const receivedFakeData = {
  field_es_banner: null,
  field_es_birthday: "1944-01-01",
  field_es_civility: "M.",
  field_es_death_date: "2022-01-22",
  field_es_name: "Vlad",
  field_es_profile_image: null,
  field_es_surname: "PUKIN",
  field_es_bio: {
    field_bio_custom: false,
    field_bio_story: "Vous n&#039;avez pas encore rédigé de biographie...",
    field_bio_photo: [
      [
        {
          image_style: null,
          url: "http://espace-souvenir.aks-dev.ogf.fr/sites/default/files/biographie/2022-04/istockphoto-664624250-612x612.jpg",
          title: "",
          alt: "CoolLife",
          width: 612,
          height: 423,
        },
      ],
    ],
  },
};
export const receievedFakeAgency = {
  field_es_civility: null,
  field_es_surname: "",
  field_nom_de_naissance: "",
  field_es_name: "",
  field_es_profile_image: null,
  field_es_bio: null,
  field_es_agency: {
    agency_name: "PFG - SERVICES FUNÉRAIRES",
    agency_marque: "PFG",
    agency_address: "3 Place de l'Hôtel de Ville",
    agency_postal_code: "51100",
    agency_town: "REIMS",
    agency_phone: null,
    agency_url: null,
  },
};
export const receivedNoDatesData = {
  field_es_banner: null,
  field_es_birthday: "",
  field_es_civility: "M.",
  field_es_death_date: undefined,
  field_es_name: "Vlad",
  field_es_profile_image: null,
  field_es_surname: "PUKIN",
  field_es_bio: {
    field_bio_custom: false,
    field_bio_story: "Vous n&#039;avez pas encore rédigé de biographie...",
    field_bio_photo: [
      [
        {
          image_style: null,
          url: "http://espace-souvenir.aks-dev.ogf.fr/sites/default/files/biographie/2022-04/istockphoto-664624250-612x612.jpg",
          title: "",
          alt: "CoolLife",
          width: 612,
          height: 423,
        },
      ],
    ],
  },
};
export const receivedEmptyData = [];
export const emptyMessages = [];
export const messages = [
  {
    field_message_surname: "Dupont",
    field_message_name: "Elise",
    field_message_date_created: "1654856022",
    field_message_texte: "Aenean porta tincidunt finibus.",
    field_message_email: "margo@test.com",
    field_message_photo: null,
    field_message_status: true,
    message_id: "1",
  },
  {
    field_message_surname: "Mos",
    field_message_name: "Jeanne",
    field_message_date_created: null,
    field_message_texte: "<p>Test du message</p>\r\n",
    field_message_email: "jeanne@mos.fr",
    field_message_status: false,
    field_message_photo: [
      {
        id: 4,
        fileType: "jpg",
        url: "http://espace.local.fr//sites/default/files/message/lotus-1205631_1920.jpg",
      },
    ],
    message_id: "2",
  },
  {
    field_message_surname: "Chacha",
    field_message_name: "Max",
    field_message_date_created: "1654856022",
    field_message_texte:
      "<p>Bonjour cher monsieur,</p>\r\n\r\n<p>Je vous écris parce qu'il faut que je teste pas mal de choses.</p>\r\n\r\n<p>Cordialement et amicalement.</p>\r\n",
    field_message_email: "email@email.com",
    field_message_photo: [
      {
        id: 5,
        fileType: "png",
        url: "http://espace.local.fr//sites/default/files/message/MicrosoftTeams-image.png",
      },
    ],
    message_id: "3",
  },
];
export const manyMessages = [
  {
    field_message_surname: "Dupont",
    field_message_name: "Elise",
    field_message_date_created: "1654856022",
    field_message_texte: "Aenean porta tincidunt finibus.",
    field_message_email: "margo@test.com",
    field_message_photo: null,
    message_id: "1",
  },
  {
    field_message_surname: "Mos",
    field_message_name: "Jeanne",
    field_message_date_created: null,
    field_message_texte: "<p>Test du message</p>\r\n",
    field_message_email: "jeanne@mos.fr",
    field_message_photo: [
      {
        id: 4,
        fileType: "jpg",
        url: "http://espace.local.fr//sites/default/files/message/lotus-1205631_1920.jpg",
      },
    ],
    message_id: "2",
  },
  {
    field_message_surname: "Chacha",
    field_message_name: "Max",
    field_message_date_created: "1654856022",
    field_message_texte:
      "<p>Bonjour cher monsieur,</p>\r\n\r\n<p>Je vous écris parce qu'il faut que je teste pas mal de choses.</p>\r\n\r\n<p>Cordialement et amicalement.</p>\r\n",
    field_message_email: "email@email.com",
    field_message_photo: [
      {
        id: 5,
        fileType: "png",
        url: "http://espace.local.fr//sites/default/files/message/MicrosoftTeams-image.png",
      },
    ],
    message_id: "3",
  },
  {
    field_message_surname: "Dupont",
    field_message_name: "Elise",
    field_message_date_created: "1654856022",
    field_message_texte: "Aenean porta tincidunt finibus.",
    field_message_email: "margo@test.com",
    field_message_photo: null,
    message_id: "4",
  },
  {
    field_message_surname: "Dupont",
    field_message_name: "Elise",
    field_message_date_created: "1654856022",
    field_message_texte: "Aenean porta tincidunt finibus.",
    field_message_email: "margo@test.com",
    field_message_photo: null,
    message_id: "5",
  },
  {
    field_message_surname: "Dupont",
    field_message_name: "Elise",
    field_message_date_created: "1654856022",
    field_message_texte: "Aenean porta tincidunt finibus.",
    field_message_email: "margo@test.com",
    field_message_photo: null,
    message_id: "6",
  },
  {
    field_message_surname: "Dupont",
    field_message_name: "Elise",
    field_message_date_created: "1654856022",
    field_message_texte: "Aenean porta tincidunt finibus.",
    field_message_email: "margo@test.com",
    field_message_photo: null,
    message_id: "7",
  },
  {
    field_message_surname: "Dupont",
    field_message_name: "Elise",
    field_message_date_created: "1654856022",
    field_message_texte: "Aenean porta tincidunt finibus.",
    field_message_email: "margo@test.com",
    field_message_photo: null,
    message_id: "8",
  },
  {
    field_message_surname: "Dupont",
    field_message_name: "Elise",
    field_message_date_created: "1654856022",
    field_message_texte: "Aenean porta tincidunt finibus.",
    field_message_email: "margo@test.com",
    field_message_photo: null,
    message_id: "9",
  },
];
export const unpublishedMessages = [
  {
    author: "John Doe",
    body: "123123",
    message_id: "1",
    picture:
      "http://espace.local.fr/themes/custom/souvenirs/src/assets/images/bg-images/img-bg.jpg",
    field_message_date_created: "1654856022",
    published: false,
    email: "coco@mail.ru",
  },

  {
    author: "Петька",
    body: " HELP SOS HELP SOS HELP SOS ",
    message_id: "2",
    picture: "",
    field_message_date_created: "1654856022",
    published: true,
    email: "lalala@mail.ru",
  },
];
export const unpublishedMessage = {
  body: "coucou",
  author: "Spiderman",
  dateTime: "1970-01-01",
  picture: null,
  email: "ljf@lskdjf.dd",
  message_id: "1",
  published: false,
};
export const biography = "coucou je suis la biographie";
export const resultsSuggestions = [
  { title: "hohohoho", body: "mlsd mslfkjm elkfjmzl kqf", id: "1" },
  { title: "CLhohoo", body: "mlsd msmdfksm ldfmsslfkjm elkfjmzl kqf", id: "2" },
];
