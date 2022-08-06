export const administratorValidationValues = {
  surname: {
    pattern: {
      value: /^([a-zA-Z\u00C0-\u00FF '-])+$/,
      message: "Merci de renseigner votre nom de famille correct",
    },
    isRequired: true,
    required: "Merci de renseigner votre nom de famille",
  },
  name: {
    pattern: {
      value: /^([a-zA-Z\u00C0-\u00FF '-])+$/,
      message: "Merci de renseigner votre prénom",
    },
    isRequired: true,
    required: "Merci de renseigner votre prénom",
  },
  email: {
    isRequired: true,
    required: "Merci de renseigner votre email",
  },
  phone: {
    pattern: {
      value: /^([0-9])+$/,
      message:
        "Merci de renseigner le numéro de téléphone au format requis (ex. 0799999999)",
    },
    isRequired: false,
  },
  current_password: {
    isRequired: false,
  },
  repeat_new_password: {
    isRequired: false,
  },
  new_password: {
    isRequired: false,
    patterns: [
      {
        name: "patternNumber",
        value: /[0-9]/,
      },
      {
        name: "patternLength",
        value: /^[\s\S]{8,}$/,
      },
      {
        name: "patternMaj",
        value: /[A-Z]/,
      },
      {
        name: "patternSpecialChar",
        value: /[ !"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/,
      },
    ],
  },
};

export const biographyValidationValues = {
  biography: {
    isRequired: false,
  },
  photos: {
    isRequired: false,
  },
};

export const ceremonyValidationValues = {
  eventName: {
    pattern: {
      value: /^([0-9a-zA-Z\u00C0-\u00FF ',-])+$/,
      message: "Merci de renseigner le nom de votre événement",
    },
    isRequired: true,
    required: "Merci de renseigner le nom de votre événement",
  },
  eventPlace: {
    pattern: {
      value: /^([0-9a-zA-Z\u00C0-\u00FF ',-])+$/,
      message: "Merci de renseigner le lieu de votre événement",
    },
    isRequired: true,
    required: "Merci de renseigner le lieu de votre événement",
  },
  address: {
    pattern: {
      value: /^([0-9a-zA-Z\u00C0-\u00FF ',-])+$/,
      message: "Merci de renseigner l'adresse de l’événement",
    },
    isRequired: true,
    required: "Merci de renseigner l'adresse de l’événement",
  },
  address2: {
    pattern: {
      value: /^([0-9a-zA-Z\u00C0-\u00FF ',-])+$/,
      message: "Merci de renseigner l'adresse de l’événement",
    },
    isRequired: false,
  },
  city: "",
  eventDate: {
    isRequired: true,
    required: "Merci de renseigner la date de l’événement",
  },
  eventTime: {
    isRequired: true,
    required: "Merci de renseigner l'heure de l’événement",
  },
  zipCode: {
    pattern: {
      value: /^[0-9]{5}$/,
      message: "Merci de renseigner un code postal à 5 chiffres",
    },
    isRequired: true,
    required: "Merci de renseigner un code postal à 5 chiffres",
  },
};

export const forgotPasswordVlidationValues = {
  email: {
    pattern: {
      value:
        /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/,
      message:
        "Merci de renseigner une adresse email valide (p.e. email@domain.com)",
    },
    isRequired: true,
    required: "Merci de renseigner votre adresse email",
  },
};

export const loginUserValidationValues = {
  username: {
    pattern: {
      value: /^([^<>()[\],"])+$/,
      message: "Merci de renseigner votre identifiant",
    },
    isRequired: true,
    required: "Merci de renseigner votre identifiant",
  },
  password: {
    isRequired: true,
    required: "Merci de renseigner votre mot de passe",
  },
};

export const messageValidationValues = {
  firstName: {
    pattern: {
      value: /^([0-9a-zA-Z\u00C0-\u00FF ',-])+$/,
      message: "Merci de renseigner votre prénom",
    },
    isRequired: true,
    required: "Merci de renseigner votre prénom",
  },
  lastName: {
    pattern: {
      value: /^([0-9a-zA-Z\u00C0-\u00FF ',-])+$/,
      message: "Merci de renseigner votre nom de famille",
    },
    isRequired: true,
    required: "Merci de renseigner votre nom de famille",
  },
  email: {
    pattern: {
      value:
        /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/,
      message:
        "Merci de renseigner une adresse email valide (p.e. email@domain.com)",
    },
    isRequired: true,
    required: "Merci de renseigner votre adresse email",
  },
  message: {
    isRequired: true,
    required: "Merci de remplir le texte du message",
  },
  photo: {
    isRequired: false,
  },
  eventsOptin: {
    isRequired: false,
  },
};

export const resetPasswordValidationValues = {
  repeat_new_password: {
    isRequired: true,
    required: "Merci de confirmer le mot de passe",
  },
  new_password: {
    isRequired: true,
    required: "Merci de renseigner le mot de passe",
    patterns: [
      {
        name: "patternNumber",
        value: /[0-9]/,
      },
      {
        name: "patternLength",
        value: /^[\s\S]{8,}$/,
      },
      {
        name: "patternMaj",
        value: /[A-Z]/,
      },
      {
        name: "patternSpecialChar",
        value: /[ !"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/,
      },
    ],
  },
};
