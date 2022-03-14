import client from './client';
import { registerType, loginType } from 'types/auth';

export const register = ({ email, username, password }: registerType) => client.post('user/register', { email, username, password });

export const login = ({ email, password }: loginType) => client.post('user/login', { email, password });

export const tokenRefresh = () => client.get('user/token');
