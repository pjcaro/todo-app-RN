import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import t from '../../services/translate';

const Link = ({ textKey, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Text style={styles.textLink}>{t(textKey)}</Text>
  </TouchableOpacity>
);

export default Link;
