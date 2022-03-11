/* eslint-disable */
import axios from 'axios';

const client = axios.create({
    baseURL: process.env.REACT_APP_BACKEND
});

client.interceptors.request.use((config) => {
    const user = localStorage.getItem('s3-user');
    if (user) {
        const { token } = JSON.parse(user);
        // @ts-ignore
        config.headers['access_token'] = token;
        return config;
    }
    return config;
});

export default client;
