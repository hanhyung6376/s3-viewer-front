import { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import { bucketList } from 'lib/api/s3';

const useBucketList = () => {
    const { app } = useParams<{ app: string }>();
    const [row, setRow] = useState<any>([]);
    const columns = useMemo(
        () => [
            {
                accessor: 'index',
                Header: 'index'
            },
            {
                accessor: 'name',
                Header: 'name'
            }
        ],
        []
    );

    const preprocessing = (rowData: string[]) => {
        const pre: any = [];
        rowData.map((value, index) => {
            // @ts-ignore
            const preData = {
                index: index,
                name: <Link to={`/s3/${app}/${value}`}>{value}</Link>
            };
            pre.push(preData);
        });
        setRow(pre);
    };

    const { isLoading } = useQuery('bucket-list', () => bucketList({ app }), {
        onSuccess: (body) => preprocessing(body.data.buckets)
    });

    return { columns, row, isLoading };
};

export default useBucketList;
