import { lazy } from 'react';
import MainLayout from 'layout/MainLayout';

import Loadable from 'component/common/Loadable';
const Test = Loadable(lazy(() => import('component/common/Test')));

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/main',
            element: <Test />
        }
    ]
};

export default MainRoutes;
