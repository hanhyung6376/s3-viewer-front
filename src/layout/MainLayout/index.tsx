import { Outlet } from 'react-router-dom';
import Header from 'component/common/Header';
import Sidebar from './Sidebar';
import { useHeader } from 'hooks/main';
import { useHeaderType } from 'types/hooks';
import styled from 'styled-components';
import palette from 'lib/styles';

/* 화면 전체를 채움 */
const TemplateBlock = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background: ${palette.gray[2]};
    /* flex로 내부 내용 중앙 정렬 */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 30;
`;

/* 흰색 박스 */
const WhiteBox = styled.div`
    .logo-area {
        display: block;
        padding-bottom: 2rem;
        text-align: center;
        font-weight: bold;
        letter-spacing: 2px;
    }
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
    padding: 2rem;
    width: 90%;
    height: 80%;
    background: white;
    border-radius: 10px;
`;

const Body = styled.div`
    display: flex;
    flex-direction: row;
`;

const MainLayout = () => {
    const { user, onLogout }: useHeaderType = useHeader();
    return (
        <>
            <Header user={user} onLogout={onLogout} />
            <TemplateBlock>
                <WhiteBox>
                    <Body>
                        <Sidebar />
                        <Outlet />
                    </Body>
                </WhiteBox>
            </TemplateBlock>
        </>
    );
};

export default MainLayout;
