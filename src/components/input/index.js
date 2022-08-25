import React from 'react';
import { TextInput } from 'react-native';
import styles from './styles';

const InputForm = ({ onChangeText, text, placeholder, ...props }) => {
  return (
    <TextInput
      style={styles.input}
      onChangeText={onChangeText}
      value={text}
      placeholder={placeholder}
      {...props}
    />
  );
};

export default InputForm;
