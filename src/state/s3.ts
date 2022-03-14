import { atom } from 'recoil';
import { addAppType } from 'types/s3';

export const addAppState = atom<addAppType>({
    key: 'app',
    default: {
        appName: '',
        accessKey: '',
        secretKey: ''
    }
});
