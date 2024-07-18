import { Table} from '@mantine/core';
import { LIST_TITLE_TABLE } from '../../constants';
import { TableItem } from './Item/TableItem';
import { TablePanigation } from './Panigation/TablePanigation';

export const TableListData = () => {
    return (
         <>
            <Table 
              highlightOnHover 
              withTableBorder 
              withColumnBorders
            >
              <Table.Thead>
              <Table.Tr>
                  <Table.Th>{LIST_TITLE_TABLE.SERIAL_NUMBER}</Table.Th>
                  <Table.Th>{LIST_TITLE_TABLE.BOOK_TITLE}</Table.Th>
                  <Table.Th>{LIST_TITLE_TABLE.BORROWER}</Table.Th>
                  <Table.Th>{LIST_TITLE_TABLE.BORROW_DATE}</Table.Th>
                  <Table.Th>{LIST_TITLE_TABLE.RETURN_DATE}</Table.Th>
                  <Table.Th>{LIST_TITLE_TABLE.STATUS}</Table.Th>
                  <Table.Th>{LIST_TITLE_TABLE.FEATURE}</Table.Th>
              </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                <TableItem/>
              </Table.Tbody>
            </Table>
            <TablePanigation/>
         </>
    )
}