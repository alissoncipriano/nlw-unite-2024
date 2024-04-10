import { View, Image } from 'react-native';

import { FontAwesome6, MaterialIcons } from '@expo/vector-icons/';
import { Link } from 'expo-router';

import { colors } from '@/styles/colors';

import { Input } from '@/components/Input/Input';
import { Button } from '@/components/Button/Button';

import useRegister from './useRegister';

const RegisterView = () => {
  const { name, setName, email, setEmail, handleRegister } = useRegister();

  return (
    <>
      <Image
        source={require('@/assets/logo.png')}
        className='h-16'
        resizeMode='contain'
      />

      <View className='w-full mt-12 gap-3'>
        <Input>
          <FontAwesome6
            name='user-circle'
            size={20}
            color={colors.green[200]}
          />
          <Input.Field placeholder='Nome completo' onChangeText={setName} />
        </Input>

        <Input>
          <MaterialIcons
            name='alternate-email'
            size={20}
            color={colors.green[200]}
          />
          <Input.Field
            placeholder='Email'
            keyboardType='email-address'
            onChangeText={setEmail}
          />
        </Input>

        <Button title='Realizar inscrição' onPress={handleRegister} />

        <Link
          href='/'
          className='text-gray-100 text-base font-bold text-center mt-8'
        >
          Já possui ingresso?{' '}
        </Link>
      </View>
    </>
  );
};

export default RegisterView;
