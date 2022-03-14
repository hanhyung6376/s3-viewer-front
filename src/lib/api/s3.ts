import client from './client';
import { keyType, bucketListType, fileType, addAppType } from 'types/s3';

export const addApp = ({ appName }: addAppType) => client.post('s3/add_app', { appName });

export const bucketList = ({ access, secret }: keyType) => client.post('s3/bucket_list', { access, secret });

export const fileList = ({ access, secret, bucket }: bucketListType) => client.post('s3/file_list', { access, secret, bucket });

export const getFile = ({ access, secret, bucket, file }: fileType) => client.post('s3/get_file', { access, secret, bucket, file });
