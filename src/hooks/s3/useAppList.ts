import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { appList } from 'lib/api/s3';

const useAppList = () => {
    const [list, setList] = useState<string[]>([]);
    const navigate = useNavigate();
    const { isLoading } = useQuery('app-list', appList, {
        onSuccess: (data) => setList(data.data.app)
    });

    const onClick = (value: string) => {
        navigate(`s3/${value}`);
    };

    return { list, isLoading, onClick };
};

export default useAppList;
