import React from 'react';
import { ActivityIndicator, Text, TouchableOpacity } from 'react-native';

import styles from './styles';
import t from '../../services/translate';

const Button = ({ textKey, onPress, loading, ...props }) => (
  <TouchableOpacity
    style={styles.button}
    onPress={onPress}
    disabled={loading}
    {...props}>
    {loading ? (
      <ActivityIndicator color="white" />
    ) : (
      <Text style={styles.textButton}>{t(textKey)}</Text>
    )}
  </TouchableOpacity>
);

export default Button;
