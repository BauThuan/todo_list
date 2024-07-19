import { Select } from '@mantine/core';
import { STATUS_BRROW_BOOK } from '../../constants';
import { setSelectedValue } from '../../store/action';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

export const SearchStatus = () => {
  const [value, setValue] = useState<string | null>(STATUS_BRROW_BOOK.ALL);
  const dispatch = useDispatch();
  const mapStatusToBoolean = (status: string | null): any => {
    switch (status) {
      case STATUS_BRROW_BOOK.PAID:
        return true;
      case STATUS_BRROW_BOOK.UN_PAID:
        return false;
      case STATUS_BRROW_BOOK.ALL:
        return null;
      default:
        return null;
    }
  };
  useEffect(() => {
    dispatch(setSelectedValue(mapStatusToBoolean(value)))
  }, [value])
  return (
    <Select
      checkIconPosition="right"
      placeholder="Lọc theo trạng thái"
      data={[STATUS_BRROW_BOOK.ALL,STATUS_BRROW_BOOK.PAID, STATUS_BRROW_BOOK.UN_PAID]}
      value={value} 
      onChange={setValue}
      defaultSearchValue={STATUS_BRROW_BOOK.ALL}
    />
  );
}