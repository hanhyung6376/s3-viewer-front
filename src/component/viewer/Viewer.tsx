import styled from 'styled-components';
import palette from 'lib/styles/index';
import Responsive from '../common/Responsive';
import Button from '../common/button/Button';

const PostViewerBlock = styled(Responsive)`
    margin-top: 4rem;
`;
const PostHead = styled.div`
    border-bottom: 1px solid ${palette.gray[2]};
    padding-bottom: 3rem;
    margin-bottom: 3rem;
    h1 {
        font-size: 3rem;
        line-height: 1.5;
        margin: 0;
    }
`;

const PostContent = styled.div`
    font-size: 1.3125rem;
    color: ${palette.gray[8]};
`;

const Viewer = ({ fileName, body, error, loading, onClick }: any) => {
    if (error) {
        return <PostViewerBlock>존재하지 않는 포스트입니다.</PostViewerBlock>;
    }

    if (loading || !body) {
        return null;
    }

    return (
        <PostViewerBlock>
            <PostHead>
                <h1>{fileName}</h1>
            </PostHead>
            <Button onClick={onClick}>다운로드</Button>
            <PostContent dangerouslySetInnerHTML={{ __html: body }} />
        </PostViewerBlock>
    );
};

export default Viewer;
