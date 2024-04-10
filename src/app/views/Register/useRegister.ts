import { useState } from 'react';

import { Alert } from 'react-native';

import { router } from 'expo-router';

const initialState = {
  name: '',
  email: '',
};

const useRegister = () => {
  const [name, setName] = useState(initialState.name);
  const [email, setEmail] = useState(initialState.email);

  const handleRegister = () => {
    if (!name.trim() || !email.trim())
      return Alert.alert('Inscrição', 'Preencha todos os campos!');

    router.push('/ticket');
  };

  return {
    name,
    setName,
    email,
    setEmail,
    handleRegister,
  };
};

export default useRegister;
