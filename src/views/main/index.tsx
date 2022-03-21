import { Link } from 'react-router-dom';
import styled from 'styled-components';
import palette from 'lib/styles';
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
    const { user, title, _id }: any = post;
    return (
        <ItemBlock>
            <h2>
                <Link to={`/@${user.username}/${_id}`}>{title}</Link>
            </h2>
        </ItemBlock>
    );
};

const Main = ({ app, loading, error, showWriteButton }: any) => {
    // 에러 발생 시
    if (error) {
        console.log(error);
        return <ListBlock>에러가 발생했습니다.</ListBlock>;
    }
    return (
        <ListBlock>
            <WriteButtonWrapper>
                {showWriteButton && (
                    <Button cyan to="/write">
                        새 글 작성하기
                    </Button>
                )}
            </WriteButtonWrapper>
            {/* 로딩 중이 아니고, 포스트 배열이 존재할 때만 보여 줌 */}
            {!loading && app && (
                <div>
                    {app.map((data: any) => (
                        <PostItem post={data} key={data._id} />
                    ))}
                </div>
            )}
        </ListBlock>
    );
};

export default Main;
