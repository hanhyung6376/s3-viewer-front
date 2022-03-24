import styled from 'styled-components';
import palette from 'lib/styles/index';
import Responsive from '../common/Responsive';

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

const Viewer = ({ fileName, body, error, loading }: any) => {
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
            <PostContent dangerouslySetInnerHTML={{ __html: body }} />
        </PostViewerBlock>
    );
};

export default Viewer;
