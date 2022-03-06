import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';

import AuthRoutes from './AuthRoutes';
import MainRoutes from './MainRoutes';
import Loadable from 'component/common/Loadable';
const Login = Loadable(lazy(() => import('views/auth/Login')));

export default function Routes() {
    return useRoutes([{ path: '/', element: <Login /> }, AuthRoutes, MainRoutes]);
}
