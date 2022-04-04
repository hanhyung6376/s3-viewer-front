import { useGetFile } from 'hooks/s3';
import Viewer from 'component/viewer/Viewer';

const FileViewer = () => {
    const { file, body, error, isLoading, onClick } = useGetFile();

    return (
        <>
            <Viewer fileName={file} body={body} error={error} loading={isLoading} onClick={onClick} />
        </>
    );
};

export default FileViewer;
