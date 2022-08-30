import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={{ fontSize: 20 }}>{title}</Text>
  </View>
);

export default Item;
