import { lazy } from 'react';
import MainLayout from 'layout/MainLayout';

import Loadable from 'component/common/Loadable';
const Test = Loadable(lazy(() => import('component/common/Test')));
const Main = Loadable(lazy(() => import('views/main')));
const BucketList = Loadable(lazy(() => import('views/s3/BucketList')));
const FileList = Loadable(lazy(() => import('views/s3/FileList')));

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
            path: '/s3/:app',
            element: <BucketList />
        },
        {
            path: '/s3/:app/:bucket',
            element: <FileList />
        }
    ]
};

export default MainRoutes;
