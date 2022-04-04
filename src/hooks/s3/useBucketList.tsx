import { useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { bucketList } from 'lib/api/s3';

const useBucketList = () => {
    const { app } = useParams<{ app: string }>();
    const [row, setRow] = useState<any>([]);
    const navigate = useNavigate();
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

    const onClick = (params: string) => {
        navigate(`${params}`);
    };

    const preprocessing = (rowData: string[]) => {
        const pre: any = [];
        rowData.map((value, index) => {
            // @ts-ignore
            const preData = {
                index: index,
                name: value
            };
            pre.push(preData);
        });
        setRow(pre);
    };

    const { isLoading } = useQuery('bucket-list', () => bucketList({ app }), {
        onSuccess: (body) => preprocessing(body.data.buckets),
        retry: false
    });

    return { columns, row, isLoading, onClick };
};

export default useBucketList;
