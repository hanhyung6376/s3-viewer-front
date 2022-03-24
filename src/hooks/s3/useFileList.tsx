import { useState, useMemo } from 'react';
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';
import { fileList } from 'lib/api/s3';

const useFileList = () => {
    const [row, setRow] = useState<any>([]);
    const columns = useMemo(
        () => [
            {
                accessor: 'name',
                Header: 'name'
            },
            {
                accessor: 'lastModified',
                Header: 'Last Modified'
            },
            {
                accessor: 'size',
                Header: 'Size'
            },
            {
                accessor: 'storageClass',
                Header: 'Storage Class'
            }
        ],
        []
    );
    const { app, bucket } = useParams();

    const preprocessing = (rowData: any) => {
        const pre: any = [];
        rowData.map((value: any) => {
            // @ts-ignore
            const preData = {
                name: <Link to={`/s3/${app}/${bucket}/${value.Key}`}>{value.Key}</Link>,
                lastModified: value.LastModified,
                size: value.Size,
                storageClass: value.StorageClass
            };
            pre.push(preData);
        });
        setRow(pre);
    };

    const { error, isLoading } = useQuery('file-list', () => fileList({ app, bucket }), {
        onSuccess: (body) => preprocessing(body.data.files)
    });

    return { columns, row, isLoading, error };
};

export default useFileList;