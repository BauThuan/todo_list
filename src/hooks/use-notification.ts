import { toast } from 'react-toastify';
import { TOAST_TYPE } from '../constants';

type Props = {
  title: string,
  type?: string,
}

export const useNotification = () => {
  const notifyStatus = ({ title, type = TOAST_TYPE.SUCCESS }: Props) => {
    switch (type) {
      case TOAST_TYPE.INFO:
        toast.info(title);
        break;
      case TOAST_TYPE.SUCCESS:
        toast.success(title);
        break;
      case TOAST_TYPE.WARNING:
        toast.warning(title);
        break;
      case TOAST_TYPE.ERROR:
        toast.error(title);
        break;
      default:
        toast(title);
        break;
    }
  };

  return notifyStatus;
};