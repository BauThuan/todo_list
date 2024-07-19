import { Table, Button, Group, Select, Text } from '@mantine/core';
import { useEffect } from 'react';
import { BTN_TITLE, INFOR_ACTION_STORE, STATUS_BRROW_BOOK } from '../../../constants';
import { useDispatch, useSelector } from 'react-redux';
import { TableSkeleton } from '../Loading/TableSkeleton';
import { BookType, INITIAL_STATE } from '../../../type';
import { setDataModal, setFeatureModal, setStatusModal } from '../../../store/action';

export const TableItem = () => {
    const dispatch = useDispatch();
    const data = useSelector((state: BookType) => state.data);
    const currentPage = useSelector((state: INITIAL_STATE) => state.currentPage);
    const status = useSelector((state: INITIAL_STATE) => state.status);

    useEffect(() => {
        dispatch({ type: INFOR_ACTION_STORE.FETCH_DATA_REQUEST });
    }, [dispatch]);

    const startIndex = (currentPage - 1) * 10;
    const endIndex = startIndex + 10;
    const currentPageData = status !== null
        ? data?.filter((item: INITIAL_STATE) => item.status === status).slice(startIndex, endIndex)
        : data?.slice(startIndex, endIndex);

    const handleInformation = (element: BookType, title: string) => {
        dispatch(setStatusModal(true))
        dispatch(setDataModal(element))
        dispatch(setFeatureModal(title))
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
                                    <Button onClick={() => handleInformation(element, 'edit')} variant="light" color="orange">{BTN_TITLE.EDIT}</Button>
                                    <Button onClick={() => handleInformation(element, 'delete')} variant="light" color="rgba(250, 15, 15, 1)">{BTN_TITLE.DELETE}</Button>
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
