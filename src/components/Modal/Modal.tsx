import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, TextInput,Group, Box, Text } from '@mantine/core';
import { DateInput } from '@mantine/dates';
import { useForm } from '@mantine/form';
import { SearchStatus } from '../Search/SearchStatus';
import { useNotification } from '../../hooks/use-notification';
import { BTN_TITLE } from '../../constants';
import { useDispatch, useSelector } from 'react-redux';
import { INITIAL_STATE } from '../../type';
import { setStatusModal } from '../../store/action';
export const ModalAddNewData = () => {
  const statusModal = useSelector((state: INITIAL_STATE) => state.statusModal);
  const dataModal = useSelector((state: INITIAL_STATE) => state.dataModal);
  const featureModal = useSelector((state: INITIAL_STATE) => state.featureModal);
  const [opened] = useDisclosure(statusModal);
  const notifyStatus = useNotification();
  const dispatch = useDispatch();

  const handleValidateString = (value: string, fields: string) => {
    if(value.length === 0 && featureModal !== 'delete') {
        return `Vui lòng điền đầy đủ tên ${fields}`
    }
    if(value.length !== 0 && value.length < 5 && featureModal !== 'delete') {
        return `Tên ${fields} tối thiểu 5 kí tự`
    }
    return null;
  }

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      bookTitle: '',
      borrower: '',
      borrowDate: '',
      returnDate: '',
    },
    validate: {
      bookTitle: (value: string) => handleValidateString(value, 'sách'),
      borrower: (value: string) => handleValidateString(value, 'người mượn'),
      borrowDate: (value: string) => (value.length !==0 || featureModal === 'delete' ? null : 'Vui lòng điền đầy đủ thông tin ngày mượn'),
      returnDate: (value: string) => (value.length !==0 || featureModal === 'delete' ? null : 'Vui lòng điền đầy đủ thông tin ngày hoàn trả'),
    },
  });

  return (
    <>
      <Modal
        opened={statusModal ? statusModal : false } 
        onClose={() => {
          dispatch(setStatusModal(false))
          return statusModal
        }} 
        title={<Text fw={500}>Thêm thông tin mượn sách</Text>} 
        centered
      >
        <form onSubmit={form.onSubmit((values) => {
          if(featureModal === 'add'){
            dispatch({ type: 'ADD_DATA_REQUEST', payload: values});
            dispatch(setStatusModal(false))
            notifyStatus({ title: 'Thành công !', type: 'success' })
            setTimeout(() => {
              location.reload();
            }, 1000)
            return;
          }
          if(featureModal === 'edit'){
            dispatch({ type: 'UPDATE_DATA_REQUEST', payload: {
              id: dataModal?.id,
              bookTitle: values.bookTitle,
              borrower: values.borrower,
              borrowDate: values.borrowDate,
              returnDate: values.returnDate,
            }});
            dispatch(setStatusModal(false))
            notifyStatus({ title: 'Thành công !', type: 'success' })
            setTimeout(() => {
              location.reload();
            }, 1000)
            return;
          }
          dispatch({ type: 'DELETE_DATA_REQUEST', payload: { id: dataModal?.id  } });
          dispatch(setStatusModal(false))
          notifyStatus({ title: 'Thành công !', type: 'success' })
          setTimeout(() => {
            location.reload();
          }, 1000)
          return;
        })}>
            <TextInput
                withAsterisk
                label="Tên sách"
                placeholder="Tên sách"
                key={form.key('bookTitle')}
                {...form.getInputProps('bookTitle')}
                value={dataModal?.bookTitle}
            />
            <TextInput
                withAsterisk
                label="Tên người mượn"
                placeholder="Tên người mượn"
                key={form.key('borrower')}
                {...form.getInputProps('borrower')}
                value={dataModal?.borrower}
            />
            <DateInput 
                withAsterisk
                clearable 
                defaultValue={new Date()} 
                label="Ngày mượn"  
                placeholder="Date input" 
                key={form.key('borrowDate')}
                {...form.getInputProps('borrowDate')}
                // value={dataModal?.borrowDate}
            />
            <DateInput 
                withAsterisk
                clearable 
                defaultValue={new Date()} 
                label="Ngày trả"  
                placeholder="Date input" 
                key={form.key('returnDate')}
                {...form.getInputProps('returnDate')}
                // value={dataModal?.returnDate}
            />
            <Group justify="flex-end" mt="md">
                <Button fullWidth type="submit" onClick={() => {
                }}>{BTN_TITLE.ADD}</Button>
            </Group>
        </form>
      </Modal>
        <Box mb={10} display="flex" style={{justifyContent: "space-between", alignItems: "center"}}>
            <Text fw={500}>Quản lý mượn sách</Text>
            <Box display='flex'>
                <SearchStatus/>
                <Button ml={10} onClick={() => {
                  dispatch(setStatusModal(true))
                }}>{BTN_TITLE.ADD_INFORMATION}</Button>
            </Box>
        </Box>
    </>
  );
}