/// <reference types="react-scripts" />
declare namespace NodeJs {
    interface ProcessEnv {
        NODE_ENV: 'dev' | 'prod';
        REACT_APP_BACKEND: string;
    }
}
