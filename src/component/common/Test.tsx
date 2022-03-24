import { useFileList, useGetFile } from 'hooks/s3';

const Test = () => {
    const { data1 } = useFileList();
    const { data2 } = useGetFile();
    console.log(data1);
    console.log(data2);
    return (
        <>
            <p>test</p>
        </>
    );
};

export default Test;
