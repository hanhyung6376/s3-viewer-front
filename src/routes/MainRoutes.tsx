import { lazy } from 'react';
import MainLayout from 'layout/MainLayout';

import Loadable from 'component/common/Loadable';
const Test = Loadable(lazy(() => import('component/common/Test')));
const Main = Loadable(lazy(() => import('views/main')));

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/main',
            element: <Test />
        },
        {
            path: '/test',
            element: <Main />
        },
        {
            path: '/test/:app'
        }
    ]
};

export default MainRoutes;
