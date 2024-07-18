import { Pagination, Box } from '@mantine/core';
import {useSelector, useDispatch } from 'react-redux';
import { setNewCurrentPage } from '../../../store/action';
import { BookType } from '../../../type';
import { useState } from 'react';


export const TablePanigation = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: BookType) => state.data)
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    dispatch(setNewCurrentPage(page))
  };
  return (
    <Box mt={10} display="flex" style={{justifyContent:"flex-end"}}>
      <Pagination 
        total={Math.ceil(data && data?.length / 10)}
        value={currentPage}
        onChange={handlePageChange}
      />
    </Box>
  );
}