import { useGetFile } from 'hooks/s3';
import Viewer from 'component/viewer/Viewer';

const FileViewer = () => {
    const { file, body, error, isLoading } = useGetFile();

    return (
        <>
            <Viewer fileName={file} body={body} error={error} loading={isLoading} />
        </>
    );
};

export default FileViewer;
