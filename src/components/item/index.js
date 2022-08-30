import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

const Item = ({ item, onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[
      styles.item,
      item.completed ? styles.completed : styles.uncompleted,
    ]}>
    <Text style={{ fontSize: 20 }}>{item.description}</Text>
  </TouchableOpacity>
);

export default Item;
