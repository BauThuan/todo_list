import { Table, Button, Group, Select, Text } from '@mantine/core';
import { useEffect } from 'react';
import { BTN_TITLE, STATUS_BRROW_BOOK } from '../../../constants';
import { useDispatch, useSelector } from 'react-redux';
import { TableSkeleton } from '../Loading/TableSkeleton';
import { BookType } from '../../../type';

export const TableItem = () => {
    const dispatch = useDispatch();
    const data = useSelector((state: BookType) => state.data);
    const currentPage = useSelector((state: any) => state.currentPage);
    const status = useSelector((state: any) => state.status);

    useEffect(() => {
        dispatch({ type: 'FETCH_DATA_REQUEST' });
    }, [dispatch]);

    const startIndex = (currentPage - 1) * 10;
    const endIndex = startIndex + 10;
    const currentPageData = status !== null
        ? data?.filter((item: any) => item.status === status).slice(startIndex, endIndex)
        : data?.slice(startIndex, endIndex);

    const handleInformation = () => {
    };

    return (
        <>
            {data ? (
                currentPageData.length > 0 ? (
                    currentPageData.map((element: any) => (
                        <Table.Tr key={element?.id}>
                            <Table.Td>{element?.id}</Table.Td>
                            <Table.Td>{element?.bookTitle}</Table.Td>
                            <Table.Td>{element?.borrower}</Table.Td>
                            <Table.Td>{element?.borrowDate}</Table.Td>
                            <Table.Td>{element?.returnDate}</Table.Td>
                            <Table.Td>
                                <Select
                                    checkIconPosition="right"
                                    placeholder="Tìm kiếm theo trạng thái"
                                    data={[STATUS_BRROW_BOOK.PAID, STATUS_BRROW_BOOK.UN_PAID]}
                                    defaultValue={STATUS_BRROW_BOOK.PAID}
                                />
                            </Table.Td>
                            <Table.Td>
                                <Group justify="center">
                                    <Button onClick={handleInformation} variant="light" color="orange">{BTN_TITLE.EDIT}</Button>
                                    <Button onClick={handleInformation} variant="light" color="rgba(250, 15, 15, 1)">{BTN_TITLE.DELETE}</Button>
                                </Group>
                            </Table.Td>
                        </Table.Tr>
                    ))
                ) : (
                    <Text>Không tìm thấy dữ liệu!</Text>
                )
            ) : (
                <TableSkeleton />
            )}
        </>
    );
};
