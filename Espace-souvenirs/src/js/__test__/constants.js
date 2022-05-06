
const prestations = [
  {
    field_prest_image: [
      {
        image_style: null,
        url: "http://espace-souvenir.aks-dev.ogf.fr/sites/default/files/prestation/MicrosoftTeams-image_0.png",
        title: "",
        alt: "alt",
        width: 1200,
        height: 630
      }
    ],
    "field_prest_titre": "Offrir des fleurs",
    "field_prest_description": "C&#039;est un texte pour le module Prestation Fleurs.<br />\r\nCeci est pour remplacer lorem ipsum qui est certes très beau, mais ne vient malheureusement pas du coeur.",
    "field_prest_url": {
      "url": "https://pfg.fr",
      "title": "Commander des fleurs",
      "attributes": {
        "attributes": {
          "activate_sso_link": 0
        },
        "external": true
      }
    }
  }
]
export const initialEmptyState = {
  field_es_civility: "female",
  field_es_surname: "DUBOIS",
  field_nom_de_naissance: "SEULBOIS",
  field_es_name: "Marie",
  field_es_profile_image: [
    {
      image_style: null,
      url: "http://espace-souvenir.aks-dev.ogf.fr/sites/default/files/defunt/2022-04/a20517106255ee4efa475bd6f7fe5281_810.jpg",
      title: "",
      alt: "CoolDubois",
      width: 450,
      height: 399
    }
  ],
  field_es_banner: null,
  field_es_birthday: "1937-06-07",
  field_es_death_date: "2022-04-05",
  field_es_marque: {
    field_marque_system_name: "pfg",
    field_marque_domain: "pfg.fr",
    field_marque_prestation: null,
    field_marque_emc: true,
    field_marque_add_public: true
  },
  field_es_homage: "Chère famille, chers amis,<br />\r\nCet espace privé est destiné à recueillir vos témoignages",
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
          height: 423
        }
      ]
    ]
  },
  field_es_agency: {
    agency_name: "PFG - SERVICES FUNÉRAIRES",
    agency_marque: "PFG",
    agency_address: "3 Place de l'Hôtel de Ville",
    agency_postal_code: "51100",
    agency_town: "REIMS",
    agency_phone: "03 26 88 58 40",
    agency_url: "https://www.pfg.fr/nos-agences/marne/reims/agence-pompes-funebres-pfg-reims-aubry"
  },
  field_es_avis_id: "10202",
  field_ville_de_naissance: "Sartrouville",
  field_cp_de_naissance: "78500",
  field_ville_de_deces: "Aubervilliers",
  field_cp_de_deces: "93300"
}



export const receivedFakeData = {
  field_es_banner: null,
  field_es_birthday: "1944-01-01",
  field_es_civility: "male",
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
          height: 423
        }
      ]
    ]
  },
}
export const receievedFakeAgency = {
  agency_name: "SuperAgence",
  agency_address: "1 rue de la Rue",
  agency_postal_code:"",
  agency_town:"Capitale de la France",
  agency_phone:"",
  agency_url:""
}
export const receivedNoDatesData = {
  field_es_banner: null,
  field_es_birthday: "",
  field_es_civility: "male",
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
          height: 423
        }
      ]
    ]
  },
}
export const receivedEmptyData = []
export const messages = [
  {author: "John Doe", 
    body: "123123", 
    id: "1", 
    picture:"http://espace.local.fr/themes/custom/souvenirs/src/assets/images/bg-images/img-bg-1.jpg", 
    dateTime: new Date(),
    published: true,
    email: "coco@mail.ru"
  },

  {author: "Петька", 
    body: " HELP SOS HELP SOS HELP SOS ", 
    id: "2", 
    picture:"", 
    dateTime: new Date("1970-01-01"),
    published: true,
    email: "lalala@mail.ru"
  },
]
export const unpublishedMessages = [
  {author: "John Doe", 
    body: "123123", 
    id: "1", 
    picture:"http://espace.local.fr/themes/custom/souvenirs/src/assets/images/bg-images/img-bg-1.jpg", 
    dateTime: new Date(),
    published: false,
    email: "coco@mail.ru"
  },

  {author: "Петька", 
    body: " HELP SOS HELP SOS HELP SOS ", 
    id: "2", 
    picture:"", 
    dateTime: new Date("1970-01-01"),
    published: true,
    email: "lalala@mail.ru"
  },
];
export const unpublishedMessage = {
  body : "coucou", 
  author: "Spiderman", 
  dateTime: "1970-01-01", 
  picture: null, 
  email:"ljf@lskdjf.dd", 
  id:"1", 
  published: false
}
export const biography = "coucou je suis la biographie";
export const resultsSuggestions = [
  {title: "hohohoho", body: "mlsd mslfkjm elkfjmzl kqf", id:'1'},
  {title: "CLhohoo", body: "mlsd msmdfksm ldfmsslfkjm elkfjmzl kqf", id:"2"},
]