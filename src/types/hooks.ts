import { SyntheticEvent } from 'react';
import { loginType, registerType, userType } from 'types/auth';
import { addAppType } from 'types/s3';

export type useInputsType = {
    form?: any;
    setForm: any;
    onChange: any;
    reset: any;
};

export type useLoginType = {
    form: loginType;
    onChange: any;
    onSubmit: (e: SyntheticEvent) => void;
    error: string | null;
};

export type useRegisterType = {
    form: registerType;
    onChange: any;
    onSubmit: (e: SyntheticEvent) => void;
    error: string | null;
};

export type useHeaderType = {
    user: userType;
    onLogout: any;
};

export type useAddApp = {
    form: addAppType;
    onChange: any;
    onSubmit: (e: SyntheticEvent) => void;
    error: string | null;
};

export type useMainType = {
    app?: string[];
    isLoading?: boolean;
    error?: any;
    form?: any;
    onChange?: any;
    onSubmit?: any;
    visible?: boolean;
    onVisible?: () => void;
    onCancel?: () => void;
};
