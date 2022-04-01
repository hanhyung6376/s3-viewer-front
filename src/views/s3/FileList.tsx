import { useFileList } from 'hooks/s3';
import { Table } from '../../component/common/table';

const FileList = () => {
    const { columns, row, onClick } = useFileList();

    if (row === []) {
        return (
            <>
                <p>hi</p>
            </>
        );
    }

    return (
        <>
            <Table columns={columns} data={row} onClick={onClick} />
        </>
    );
};

export default FileList;
