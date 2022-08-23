import React from 'react';
import { Image, SafeAreaView, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import t from '../../services/translate';
import Button from '../../components/button';
import images from '../../assets';
import BackgroundView from '../../containers/backgroundView';

const Onboarding = () => {
  const { navigate } = useNavigation();

  return (
    <BackgroundView>
      <View style={styles.info}>
        <Image source={images.onboarding} style={styles.image} />
        <Text style={styles.title}>{t('onboarding.title')}</Text>
        <Text style={styles.text}>{t('onboarding.subtitle')}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button onPress={() => navigate('Login')} textKey="onboarding.button" />
      </View>
    </BackgroundView>
  );
};

export default Onboarding;
