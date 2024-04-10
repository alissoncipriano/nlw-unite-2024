import { useState } from 'react';

import {
  Alert,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Modal,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import * as ImagePicker from 'expo-image-picker';

import Header from '@/components/Header/Header';
import Credential from '@/components/Credential/Credential';

import { colors } from '@/styles/colors';

import { Button } from '@/components/Button/Button';
import QRCode from '@/components/QRCode/QRCode';

const TicketView = () => {
  const [image, setImage] = useState('');
  const [expandedQRCode, setExpandedQRCode] = useState(false);

  const handleSelectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 4],
      });

      if (result.assets) {
        const { uri } = result.assets[0];
        setImage(uri);
      }
    } catch (error) {
      console.log(error);
      Alert.alert('Erro', 'Não foi possível selecionar a imagem!');
    }
  };

  return (
    <View className='flex-1 bg-green-500'>
      <Header title='Minha Credencial' />

      <ScrollView
        className='-mt-28 -z-10'
        contentContainerClassName='px-8 pb-16'
        showsVerticalScrollIndicator={false}
      >
        <Credential
          image={image}
          onChangeAvatar={handleSelectImage}
          onExpandQRCode={() => setExpandedQRCode(true)}
        />

        <FontAwesome
          name='angle-double-down'
          size={24}
          color={colors.gray[300]}
          className='self-center my-6'
        />

        <Text className='text-white font-bold mt-4'>
          Compartilhar credencial
        </Text>

        <Text className='text-white font-regular text-base mt-1 mb-6'>
          Mostre ao mundo que você vai participar do Unite Summit!
        </Text>

        <Button title='Compartilhar' />

        <TouchableOpacity activeOpacity={0.7} className='mt-10'>
          <Text className='text-base text-white font-bold text-center'>
            Remover Ingresso
          </Text>
        </TouchableOpacity>
      </ScrollView>

      <Modal
        visible={expandedQRCode}
        animationType='slide'
        statusBarTranslucent
      >
        <View className='flex-1 bg-green-500 items-center justify-center'>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setExpandedQRCode(false)}
          >
            <QRCode size={300} value='teste' />

            <Text className='font-body text-orange-500 text-sm text-center mt-10'>
              Fechar QRCode
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default TicketView;
