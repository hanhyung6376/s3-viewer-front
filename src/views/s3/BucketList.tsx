import { useBucketList } from 'hooks/s3';
import { Table } from 'component/common/table';

const BucketList = () => {
    const { columns, row } = useBucketList();

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

export default BucketList;
