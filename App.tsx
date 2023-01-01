import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { DialogComponent } from './components/DialogComponent';

export default function App() {
  const [text, setText] = useState('');
  const [show, setShow] = useState(false);

  const isValidDomain = (url: string) => {
    // Regex to check valid
    // Domain Name
    let regex = new RegExp(
      /^(?!-)[A-Za-z0-9-]+([\-\.]{1}[a-z0-9]+)*\.[A-Za-z]{2,6}$/
    );

    if (regex.test(url) == true) {
      return true;
    } else {
      return false;
    }
  };

  const onChangeText = (text: string) => setText(text);

  const generateQRCode = () => text && setShow(true);

  const onClose = () => setShow(false);

  return (
    <View className="flex-1 items-center justify-start p-20 bg-slate-100">
      <Image
        source={require('./assets/qrcode-gn.jpg')}
        className="w-28 h-28 mb-6 rounded-full"
      />
      <Text className="text-2xl font-bold">QRCode Generator</Text>
      <Text className="text-sm font-light w-full pt-3 leading-5 text-center">
        Enter your URL below to generate a QR code and Dowwload the image !
      </Text>
      <View className="relative block w-80">
        <TextInput
          className="mt-5 placeholder:text-slate-800 block bg-white w-full border border-slate-300 rounded-md py-4 pl-3 shadow-sm focus:outline-none focus:border-sky-500 "
          onChangeText={onChangeText}
          defaultValue={text}
          placeholder="www.yoururl.sn"
          placeholderTextColor="#d1d1d1"
        />
      </View>

      <View>
        <TouchableOpacity
          onPress={generateQRCode}
          disabled={!isValidDomain(text)}
        >
          <Text
            style={{
              backgroundColor: !isValidDomain(text) ? '#bfdbfe' : '#0ea5e9',
            }}
            className="text-white text-lg w-80 px-4 py-3 mt-5 text-center"
          >
            Generate QR code
          </Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
      <DialogComponent show={show} onClose={onClose} text={text} />
    </View>
  );
}
