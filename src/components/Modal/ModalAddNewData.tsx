import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, TextInput,Group, Box, Text } from '@mantine/core';
import { DateInput } from '@mantine/dates';
import { useForm } from '@mantine/form';
import { SearchStatus } from '../Search/SearchStatus';
import { useNotification } from '../../hooks/use-notification';
import { BTN_TITLE } from '../../constants';
import { useDispatch } from 'react-redux';

export const ModalAddNewData = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const notifyStatus = useNotification();
  const dispatch = useDispatch();

  const handleValidateString = (value: string, fields: string) => {
    if(value.length === 0) {
        return `Vui lòng điền đầy đủ tên ${fields}`
    }
    if(value.length !== 0 && value.length < 5) {
        return `Tên ${fields} tối thiểu 5 kí tự`
    }
    return null;
  }

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      nameBook: '',
      nameStudent: '',
      borrwedDay: '',
      payDay: '',
    },
    validate: {
      nameBook: (value: string) => handleValidateString(value, 'sách'),
      nameStudent: (value: string) => handleValidateString(value, 'người mượn'),
      borrwedDay: (value: string) => (value.length !==0 ? null : 'Vui lòng điền đầy đủ thông tin ngày mượn'),
      payDay: (value: string) => (value.length !==0 ? null : 'Vui lòng điền đầy đủ thông tin ngày hoàn trả'),
    },
  });

  return (
    <>
      <Modal 
        opened={opened} 
        onClose={close} 
        title={<Text fw={500}>Thêm thông tin mượn sách</Text>} 
        centered
      >
        <form onSubmit={form.onSubmit((values) => {
          notifyStatus({ title: 'This is a success message!', type: 'success' })
          dispatch({ type: 'FETCH_DATA_REQUEST' });
          console.log(">>>> check data",values)
        })}>
            <TextInput
                withAsterisk
                label="Tên sách"
                placeholder="Tên sách"
                key={form.key('nameBook')}
                {...form.getInputProps('nameBook')}
            />
            <TextInput
                withAsterisk
                label="Tên người mượn"
                placeholder="Tên người mượn"
                key={form.key('nameStudent')}
                {...form.getInputProps('nameStudent')}
            />
            <DateInput 
                withAsterisk
                clearable 
                defaultValue={new Date()} 
                label="Ngày mượn"  
                placeholder="Date input" 
                key={form.key('borrwedDay')}
                {...form.getInputProps('borrwedDay')}
            />
            <DateInput 
                withAsterisk
                clearable 
                defaultValue={new Date()} 
                label="Ngày trả"  
                placeholder="Date input" 
                key={form.key('payDay')}
                {...form.getInputProps('payDay')}
            />
            <Group justify="flex-end" mt="md">
                <Button fullWidth type="submit">{BTN_TITLE.ADD}</Button>
            </Group>
        </form>
      </Modal>
        <Box mb={10} display="flex" style={{justifyContent: "space-between", alignItems: "center"}}>
            <Text fw={500}>Quản lý mượn sách</Text>
            <Box display='flex'>
                <SearchStatus/>
                <Button ml={10} onClick={open}>{BTN_TITLE.ADD_INFORMATION}</Button>
            </Box>
        </Box>
    </>
  );
}