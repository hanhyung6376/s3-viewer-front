import { userType } from '../auth';

export type buttonStyleType = {
    cyan?: string;
    fullWidth?: boolean;
};

export type modalType = {
    visible: boolean;
    title: string;
    description: string;
    confirmText: string;
    cancelText: string;
    onConfirm: () => void;
    onCancel: () => void;
};

export type headerType = {
    user: userType;
    onLogout: any;
};
