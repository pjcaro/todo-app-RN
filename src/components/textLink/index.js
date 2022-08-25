import { View, Text } from 'react-native';
import React from 'react';
import Link from '../link';

const TextLink = ({onPress, text, touchableText }) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <Text style={styles.textQuestion}>{text}</Text>
      <Link
        onPress={onPress}
        textKey={touchableText}
      />
    </View>
  );
};

export default TextLink;
