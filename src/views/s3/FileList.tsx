import { useFileList } from 'hooks/s3';
import { Table } from '../../component/common/table';

const FileList = () => {
    const { columns, row } = useFileList();

    if (row == []) {
        return (
            <>
                <p>hi</p>
            </>
        );
    }

    return (
        <>
            <Table columns={columns} data={row} />
        </>
    );
};

export default FileList;
