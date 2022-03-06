import client from './client';
import { registerType, loginType } from 'types/auth';

export const register = ({ email, username, password }: registerType) => client.post('auth/signup', { email, username, password });

export const login = ({ email, password }: loginType) => client.post('auth/signin', { email, password });
