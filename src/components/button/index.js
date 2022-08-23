import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from './styles';
import t from '../../services/translate';

const Button = ({ textKey, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.textButton}>{t(textKey)}</Text>
  </TouchableOpacity>
);

export default Button;
