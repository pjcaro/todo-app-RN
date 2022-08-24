import React from 'react';
import { useNavigation } from '@react-navigation/native';
import BackgroundView from '../../containers/backgroundView';

const Login = () => {
  const { navigate } = useNavigation();

  return <BackgroundView></BackgroundView>;
};

export default Login;
