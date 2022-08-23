import React from 'react';
import { Image, SafeAreaView } from 'react-native';

import styles from './styles';
import images from '../../assets';

const BackgroundView = ({ children }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={images.elipse} style={styles.elipse} />
      {children}
    </SafeAreaView>
  );
};

export default BackgroundView;
