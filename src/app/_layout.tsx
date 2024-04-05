import '@/styles/global.css';

import { Slot } from 'expo-router';

import { Loader } from '@/components/Loader/Loader';

import {
  useFonts,
  Roboto_700Bold,
  Roboto_500Medium,
  Roboto_400Regular,
} from '@expo-google-fonts/roboto';

const Layout = () => {
  const [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_500Medium,
    Roboto_400Regular,
  });

  if (!fontsLoaded) {
    return <Loader />;
  }

  return <Slot />;
};

export default Layout;
