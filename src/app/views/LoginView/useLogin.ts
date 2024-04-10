import { useState } from 'react';
import { Alert } from 'react-native';

const initialState = '';

const useLogin = () => {
  const [code, setCode] = useState(initialState);

  const handleAccessCredential = () => {
    if (!code.trim())
      return Alert.alert('Ingresso', 'Informe o código do ingresso!');
  };

  return {
    code,
    setCode,
    handleAccessCredential,
  };
};

export default useLogin;
