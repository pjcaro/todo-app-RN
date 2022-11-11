import React from 'react';
import { ActivityIndicator, Text, TouchableOpacity } from 'react-native';

import defaultStyles from './styles';
import t from '../../services/translate';

const Button = ({ textKey, onPress, loading, style, ...props }) => (
  <TouchableOpacity
    style={[defaultStyles.button, style]}
    onPress={onPress}
    disabled={loading}
    {...props}>
    {loading ? (
      <ActivityIndicator color="white" />
    ) : (
      <Text style={defaultStyles.textButton}>{t(textKey)}</Text>
    )}
  </TouchableOpacity>
);

export default Button;
