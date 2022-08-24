import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import t from '../../services/translate';


const TextLogin = ({textKey}) => {
  const { navigate } = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigate('SignUp')}>
      <Text style={styles.textLink}>{t(textKey)}</Text>
    </TouchableOpacity>
  );
};

export default TextLogin;
