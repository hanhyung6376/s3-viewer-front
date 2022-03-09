/// <reference types="react-scripts" />
declare namespace NodeJS {
    interface ProcessEnv {
        NODE_ENV: 'development' | 'production' | 'test';
        REACT_APP_BACKEND: string;
        REACT_APP_ACCESS_KEY: string;
        REACT_APP_SECRET_KEY: string;
        REACT_APP_BUCKET_NAME: string;
        REACT_APP_FILE: string;
    }
}
