import { View, StatusBar } from 'react-native';

import TicketView from '@/app/views/TicketView/TicketView';

const Ticket = () => {
  return (
    <View className='flex-1 bg-green-500'>
      <StatusBar barStyle='light-content' />

      <TicketView />
    </View>
  );
};

export default Ticket;
