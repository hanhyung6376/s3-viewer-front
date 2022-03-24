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
    bucket: string | undefined;
};

export type fileType = {
    app?: string | undefined;
    bucket?: string | undefined;
    file?: string | undefined;
};
