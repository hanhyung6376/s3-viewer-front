import { SyntheticEvent } from 'react';

type formType = {
    email: string;
    username?: string;
    password: string;
    confirmPassword?: string;
};

export type authFormType = {
    type: string;
    form: formType;
    onChange: any;
    onSubmit: (e: SyntheticEvent) => void;
    error: string | null;
};
