
export interface ILoginUserValidationValues {
  username: {
    pattern: {
      value: RegExp;
      message?: string;
    };
    isRequired?: boolean;
    required: string;
  };
  password: {
    isRequired: boolean;
    required: string;
  };
}

export interface IAdministratorValidationValues {
  surname: {
    pattern: {
      value: RegExp,
      message: string,
    },
    isRequired: boolean,
    required: string,
  },
  name: {
    pattern: {
      value: RegExp,
      message: string,
    },
    isRequired: boolean,
    required:string,
  },
  email: {
    isRequired: boolean,
    required: string,
  },
  phone: {
    pattern: {
      value: RegExp,
      message: string,
    },
    isRequired: boolean,
  },
  current_password: {
    isRequired: boolean,
  },
  repeat_new_password: {
    isRequired: boolean,
  },
  new_password: {
    isRequired: boolean,
    patterns: [
      {
        name: string,
        value: RegExp,
      },
      {
        name: string,
        value: RegExp,
      },
      {
        name: string,
        value: RegExp,
      },
      {
        name: string,
        value: RegExp,
      },
    ],
  },
};

export interface IBiographyValidationValues {
  biography: {
    isRequired: boolean,
  },
  photos: {
    isRequired: boolean,
  },
};

export interface IForgotPasswordVlidationValues {
  email: {
    pattern: {
      value: RegExp,
      message: string,
    },
    isRequired: boolean,
    required: string,
  },
};

export interface IMessageValidationValues {
  firstName: {
    pattern: {
      value: RegExp,
      message: string,
    },
    isRequired: boolean,
    required: string,
  },
  lastName: {
    pattern: {
      value: RegExp,
      message: string,
    },
    isRequired: boolean,
    required: string,
  },
  email: {
    pattern: {
      value: RegExp,
      message: string,
    },
    isRequired: boolean,
    required: string,
  },
  message: {
    isRequired: boolean,
    required: string,
  },
  photo: {
    isRequired: boolean,
  },
  eventsOptin: {
    isRequired: boolean,
  },
};

export interface IResetPasswordValidationValues {
  repeat_new_password: {
    isRequired: boolean,
    required: string,
  },
  new_password: {
    isRequired: boolean,
    required: string,
    patterns: {name: string, value: RegExp}[],
  },
};
