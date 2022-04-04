import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getFile } from 'lib/api/s3';
import download from 'utils/download';

const useGetFile = () => {
    const [body, setBody] = useState<any>(null);
    const { app, bucket, file } = useParams();

    const { error, isLoading } = useQuery('get-file', () => getFile({ app, bucket, file }), {
        onSuccess: (data) => setBody(data.data.file),
        retry: false
    });

    const onClick = () => {
        console.log('hi');
        download({ file: body, fileName: file });
    };

    return { file, body, error, isLoading, onClick };
};

export default useGetFile;
