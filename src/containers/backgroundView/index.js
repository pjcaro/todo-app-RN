import React from 'react';
import { Image, SafeAreaView, ScrollView } from 'react-native';

import styles from './styles';
import images from '../../assets';

const BackgroundView = ({ children }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={images.elipse} style={styles.elipse} />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} bounces={false}>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};

export default BackgroundView;
