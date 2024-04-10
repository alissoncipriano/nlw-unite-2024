import { View, Image } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons/';
import { Link } from 'expo-router';

import { colors } from '@/styles/colors';

import { Input } from '@/components/Input/Input';
import { Button } from '@/components/Button/Button';

import useLogin from './useLogin';

const LoginView = () => {
  const { code, setCode, handleAccessCredential } = useLogin();

  return (
    <>
      <Image
        source={require('@/assets/logo.png')}
        className='h-16'
        resizeMode='contain'
      />

      <View className='w-full mt-12 gap-3'>
        <Input>
          <MaterialCommunityIcons
            name='ticket-confirmation-outline'
            size={20}
            color={colors.green[200]}
          />
          <Input.Field
            placeholder='Código do ingresso'
            onChangeText={setCode}
          />
        </Input>

        <Button title='Acessar credencial' onPress={handleAccessCredential} />

        <Link
          href='/register'
          className='text-gray-100 text-base font-bold text-center mt-8'
        >
          Ainda não possui ingresso?{' '}
        </Link>
      </View>
    </>
  );
};

export default LoginView;
