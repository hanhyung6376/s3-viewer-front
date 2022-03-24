import client from './client';
import { fileType, addAppType } from 'types/s3';

export const addApp = ({ appName, accessKey, secretKey }: addAppType) =>
    client.post('s3/add_app', { appName, access_key: accessKey, secret_key: secretKey });

export const bucketList = ({ app }: bucketListAPIType) => client.get(`s3/bucket_list/${app}`);

export const fileList = ({ app, bucket }: fileType) => client.get(`s3/file_list/${app}/${bucket}`);

export const getFile = ({ app, bucket, file }: fileType) => client.get(`s3/get_file/${app}/${bucket}/${file}`);

export const appList = () => client.get('s3/app_list');

type bucketListAPIType = {
    app: string | undefined;
};
