import client from './client';
import { bucketListType, fileType, addAppType } from 'types/s3';

export const addApp = ({ appName, accessKey, secretKey }: addAppType) =>
    client.post('s3/add_app', { appName, access_key: accessKey, secret_key: secretKey });

export const bucketList = ({ app }: bucketListAPIType) => client.get(`s3/bucket_list/${app}`);

export const fileList = ({ access, secret, bucket }: bucketListType) => client.post('s3/file_list', { access, secret, bucket });

export const getFile = ({ access, secret, bucket, file }: fileType) => client.post('s3/get_file', { access, secret, bucket, file });

export const appList = () => client.get('s3/app_list');

type bucketListAPIType = {
    app: string;
};
