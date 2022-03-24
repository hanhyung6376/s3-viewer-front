import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getFile } from 'lib/api/s3';

const useGetFile = () => {
    const [body, setBody] = useState<any>(null);
    const { app, bucket, file } = useParams();

    const { error, isLoading } = useQuery('get-file', () => getFile({ app, bucket, file }), {
        onSuccess: (data) => setBody(data.data.file)
    });

    return { file, body, error, isLoading };
};

export default useGetFile;
