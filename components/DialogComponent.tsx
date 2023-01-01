import Dialog, {
  DialogButton,
  DialogContent,
  DialogFooter,
} from 'react-native-popup-dialog';
import { QRcodeComponent } from './QRcodeComponent';

interface DialogComponentProps {
  show: boolean;
  onClose: () => void;
  text: string;
}

export const DialogComponent = ({
  show,
  onClose,
  text,
}: DialogComponentProps) => {
  return (
    <Dialog
      visible={show}
      footer={
        <DialogFooter>
          <DialogButton text="OK" onPress={onClose} />
        </DialogFooter>
      }
    >
      <DialogContent>
        <QRcodeComponent text={text} />
      </DialogContent>
    </Dialog>
  );
};
