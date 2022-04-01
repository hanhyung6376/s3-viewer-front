import SearchBar from './SearchBar';
import styled from 'styled-components';
import { useTable, useGlobalFilter, usePagination } from 'react-table';
import Pagination from './Pagination';

const Styles = styled.div`
    padding: 1rem;

    table {
        border-spacing: 0;
        border: 1px solid black;

        tr {
            :last-child {
                td {
                    border-bottom: 0;
                }
            }
        }

        th,
        td {
            margin: 0;
            padding: 0.5rem;
            border-bottom: 1px solid black;
            border-right: 1px solid black;

            :last-child {
                border-right: 0;
            }
        }
    }

    .pagination {
        padding: 0.5rem;
    }
`;

const Table = ({ columns, data, onClick }: any) => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        prepareRow,
        setGlobalFilter,
        setPageSize,
        state: { pageIndex, pageSize }
    } = useTable({ columns, data }, useGlobalFilter, usePagination);

    return (
        <Styles>
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
                    {page.map((row) => {
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
            <Pagination
                gotoPage={gotoPage}
                canPreviousPage={canPreviousPage}
                nextPage={nextPage}
                canNextPage={canNextPage}
                pageCount={pageCount}
                pageIndex={pageIndex}
                pageOptions={pageOptions}
                pageSize={pageSize}
                setPageSize={setPageSize}
                previousPage={previousPage}
            />
        </Styles>
    );
};

export default Table;
