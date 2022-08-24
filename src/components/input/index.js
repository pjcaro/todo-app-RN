import React from 'react';
import { TextInput } from 'react-native';
import styles from './styles';

const InputForm = ({ onChangeText, text, placeholder, placeholderTextColor }) => {
  return (
    <TextInput
      style={styles.input}
      onChangeText={onChangeText}
      value={text}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
    />
  );
};

export default InputForm;
