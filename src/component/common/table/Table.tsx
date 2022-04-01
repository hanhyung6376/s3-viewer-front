import SearchBar from './SearchBar';
import { useTable, useGlobalFilter } from 'react-table';

const Table = ({ columns, data, onClick }: any) => {
    // @ts-ignore
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, setGlobalFilter } = useTable(
        { columns, data },
        useGlobalFilter
    );

    return (
        <>
            <SearchBar onSubmit={setGlobalFilter} />
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row) => {
                        console.log(row);
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell) =>
                                    cell.column.id === 'name' ? (
                                        <td onClick={() => onClick(cell.value)} {...cell.getCellProps()}>
                                            {cell.render('Cell')}
                                        </td>
                                    ) : (
                                        <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                    )
                                )}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
};

export default Table;
