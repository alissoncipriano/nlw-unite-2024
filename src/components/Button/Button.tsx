import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

type ButtonProps = TouchableOpacityProps & {
  title: string;
  isLoading?: boolean;
};

const Button = ({ title, isLoading, ...props }: ButtonProps) => {
  return (
    <TouchableOpacity
      disabled={isLoading}
      activeOpacity={0.7}
      className='w-full h-14 bg-orange-500 items-center justify-center rounded-lg'
      {...props}
    >
      {isLoading ? (
        <ActivityIndicator size='small' className='text-green-500' />
      ) : (
        <Text className='text-green-500 text-base font-bold uppercase'>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export { Button };
