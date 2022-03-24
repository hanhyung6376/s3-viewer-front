import { Link } from 'react-router-dom';
import { useMain } from 'hooks/main';
import styled from 'styled-components';
import palette from 'lib/styles';
import { RegistrationModal } from 'component/common/modal';
import { Button } from 'component/common/button';
import Responsive from 'component/common/Responsive';

const ListBlock = styled(Responsive)`
    margin-top: 3rem;
`;

const WriteButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 3rem;
`;

const ItemBlock = styled.div`
    padding-top: 3rem;
    padding-bottom: 3rem;
    /* 맨 위 포스트는 padding-top 없음 */
    &:first-child {
        padding-top: 0;
    }
    & + & {
        border-top: 1px solid ${palette.gray[2]};
    }
    h2 {
        font-size: 2rem;
        margin-bottom: 0;
        margin-top: 0;
        &:hover {
            color: ${palette.gray[6]};
        }
    }
    p {
        margin-top: 2rem;
    }
`;

const PostItem = ({ post }: any) => {
    return (
        <ItemBlock>
            <h2>
                <Link to={`/s3/${post}`}>{post}</Link>
            </h2>
        </ItemBlock>
    );
};

const Main = () => {
    const { app, isLoading, error, form, onChange, onSubmit, visible, onVisible } = useMain();
    // 에러 발생 시
    if (error) {
        console.log(error);
        return <ListBlock>에러가 발생했습니다.</ListBlock>;
    }
    return (
        <ListBlock>
            <WriteButtonWrapper>
                <Button cyan onClick={onVisible}>
                    Add App
                </Button>
            </WriteButtonWrapper>
            {/* 로딩 중이 아니고, 포스트 배열이 존재할 때만 보여 줌 */}
            {!isLoading && app && (
                <div>
                    {app.map((data: any) => (
                        <PostItem post={data} key={data} />
                    ))}
                </div>
            )}
            <RegistrationModal visible={visible} onChange={onChange} form={form} onSubmit={onSubmit} error={error} />
        </ListBlock>
    );
};

export default Main;
