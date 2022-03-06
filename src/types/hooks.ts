import { loginType, registerType } from 'types/auth';

export type useInputsType = {
    form?: any;
    setForm: any;
    onChange: any;
    reset: any;
};

export type useLoginType = {
    form: loginType;
    onChange: any;
    onSubmit: () => void;
    error: string | null;
};

export type useRegisterType = {
    form: registerType;
    onChange: any;
    onSubmit: any;
    error: string | null;
};
