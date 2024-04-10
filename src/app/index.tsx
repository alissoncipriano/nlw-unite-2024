import { View, StatusBar } from 'react-native';

import LoginView from '@/app/views/LoginView/LoginView';

const Home = () => {
  return (
    <View className='flex-1 bg-green-500 items-center justify-center p-8'>
      <StatusBar barStyle='light-content' />

      <LoginView />
    </View>
  );
};

export default Home;
