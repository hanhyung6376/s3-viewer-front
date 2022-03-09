import { useMutation } from 'react-query';
import { fileList } from 'lib/api/s3';
import { useEffect } from 'react';

const useFileList = () => {
    const access = process.env.REACT_APP_ACCESS_KEY;
    const secret = process.env.REACT_APP_SECRET_KEY;
    const bucket = process.env.REACT_APP_BUCKET_NAME;

    const { data, error, isLoading, mutate: fileListQuery } = useMutation(fileList);

    useEffect(() => {
        fileListQuery({ access, secret, bucket });
    }, []);

    return { data1: data, error, isLoading };
};

export default useFileList;
