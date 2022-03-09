import { useMutation } from 'react-query';
import { getFile } from 'lib/api/s3';
import { useEffect } from 'react';

const useGetFile = () => {
    const access = process.env.REACT_APP_ACCESS_KEY;
    const secret = process.env.REACT_APP_SECRET_KEY;
    const bucket = process.env.REACT_APP_BUCKET_NAME;
    const file = process.env.REACT_APP_FILE;

    const { data, error, isLoading, mutate: getFileQuery } = useMutation(getFile);

    useEffect(() => {
        getFileQuery({ access, secret, bucket, file });
    }, []);

    return { data2: data, error, isLoading };
};

export default useGetFile;
