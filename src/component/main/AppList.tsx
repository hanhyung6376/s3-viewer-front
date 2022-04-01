import { useAppList } from 'hooks/s3';

const AppList = () => {
    const { list, isLoading, onClick } = useAppList();

    console.log(list, isLoading);

    return (
        <>
            {list.map((value: string) => {
                return <p onClick={() => onClick(value)}>{value}</p>;
            })}
        </>
    );
};

export default AppList;
