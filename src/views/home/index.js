import React from 'react';
import { Image, Text, View } from 'react-native';

import styles from './styles';
import t from '../../services/translate';
import images from '../../assets';
import BackgroundView from '../../containers/backgroundView';

const Home = () => {
  return (
    <BackgroundView>
      <View style={styles.info}>
        <Image source={images.onboarding} style={styles.image} />
        <Text style={styles.title}>{t('Bienvenido!')}</Text>
      </View>
    </BackgroundView>
  );
};

export default Home;
