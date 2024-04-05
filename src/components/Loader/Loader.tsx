import { ActivityIndicator } from 'react-native';

const Loader = () => {
  return (
    <ActivityIndicator className='flex-1 bg-green-500 items-center justify-center text-orange-500' />
  );
};

export { Loader };
