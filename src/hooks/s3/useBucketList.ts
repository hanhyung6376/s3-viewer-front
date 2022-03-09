import { useMutation } from 'react-query';
import { bucketList } from 'lib/api/s3';
import { useEffect } from 'react';

const useBucketList = () => {
    const access = process.env.REACT_APP_ACCESS_KEY;
    const secret = process.env.REACT_APP_SECRET_KEY;

    const { data, error, isLoading, mutate: bucketListQuery } = useMutation(bucketList);

    useEffect(() => {
        bucketListQuery({ access, secret });
    }, []);

    return { data, error, isLoading };
};

export default useBucketList;
