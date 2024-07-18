import { Table, Box, Group, Skeleton } from '@mantine/core';
import { DataTest } from '../../../mock/data';
export const TableSkeleton = () => {
    return (
        <>
            {
                DataTest.map((element: any) => (
                    <Table.Tr key={element?.id}>
                      <Table.Td>
                        <Skeleton height={20} width="70%" />
                      </Table.Td>
                      <Table.Td>
                        <Skeleton height={20} width="100%" />
                      </Table.Td>
                      <Table.Td>
                        <Skeleton height={20} width="100%" />
                      </Table.Td>
                      <Table.Td>
                        <Skeleton height={20} width="100%" />
                      </Table.Td>
                      <Table.Td>
                        <Skeleton height={20} width="100%" />
                      </Table.Td>
                      <Table.Td>
                        <Skeleton height={20} width="100%" />
                      </Table.Td>
                      <Table.Td>
                        <Group justify="center">
                          <Box variant="light" color="orange" w={60}>
                            <Skeleton height={20} width="100%" />
                          </Box>
                          <Box variant="light" color="rgba(250, 15, 15, 1)" w={60} >
                            <Skeleton height={20} width="100%" />
                          </Box>
                        </Group> 
                      </Table.Td>
                    </Table.Tr>
                  ))
            }
        </>
    )
}