import styled from 'styled-components';
import AppList from 'component/main/AppList';

/* 화면 전체를 채움 */
const UserSection = styled.div`
    display: flex;
    border-right: 1px solid #e0e0e0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 20%;
    margin-top: 20%;
`;

const Profile = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 100%;
`;
const Menu = styled.div`
    margin-top: 30px;
    width: 200px;
    display: flex;
    flex-direction: column;
`;

const Sidebar = () => (
    <UserSection>
        <Profile />
        <Menu>
            <AppList />
        </Menu>
    </UserSection>
);

export default Sidebar;
