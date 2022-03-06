import { atom } from 'recoil';
import { userType, registerType, loginType } from 'types/auth';

export const userAtom = atom<userType>({
    key: 'user',
    default: {
        email: null,
        username: null
    }
});

export const registerAtom = atom<registerType>({
    key: 'register',
    default: {
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    }
});

export const loginAtom = atom<loginType>({
    key: 'login',
    default: {
        email: '',
        password: ''
    }
});
