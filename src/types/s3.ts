export type addAppType = {
    appName: string;
    accessKey: string;
    secretKey: string;
};

export type keyType = {
    access: string;
    secret: string;
};

export type bucketListType = keyType & {
    bucket: string;
};

export type fileType = bucketListType & {
    file: string;
};
