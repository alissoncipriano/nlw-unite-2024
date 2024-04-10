import { View, StatusBar } from 'react-native';

import RegisterView from '@/app/views/Register/RegisterView';

const Register = () => {
  return (
    <View className='flex-1 bg-green-500 items-center justify-center p-8'>
      <StatusBar barStyle='light-content' />

      <RegisterView />
    </View>
  );
};

export default Register;
