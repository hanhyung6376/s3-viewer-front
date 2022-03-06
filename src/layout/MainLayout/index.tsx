import { Outlet } from 'react-router-dom';
import Header from 'component/common/Header';
import { useHeader } from 'hooks/main';
import { useHeaderType } from 'types/hooks';

const MainLayout = () => {
    const { user, onLogout }: useHeaderType = useHeader();
    return (
        <>
            <Header user={user} onLogout={onLogout} />
            <Outlet />
        </>
    );
};

export default MainLayout;
