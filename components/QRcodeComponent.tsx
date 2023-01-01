import { View } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

interface QRcodeComponentProps {
  text: string;
}

export const QRcodeComponent = ({ text }: QRcodeComponentProps) => {
  return (
    <View style={{ paddingTop: 18 }}>
      <QRCode size={340} value={text} />
    </View>
  );
};
