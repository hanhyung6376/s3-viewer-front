import { lazy } from 'react';

import Loadable from 'component/common/Loadable';

const Login = Loadable(lazy(() => import('views/auth/Login')));
const Register = Loadable(lazy(() => import('views/auth/Register')));

const AuthRoutes = {
    children: [
        {
            path: '/login',
            element: <Login />
        },
        {
            path: '/register',
            element: <Register />
        }
    ]
};

export default AuthRoutes;
