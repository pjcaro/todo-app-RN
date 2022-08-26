import React, { useContext } from 'react';
import { Image, Text, View } from 'react-native';

import styles from './styles';
import t from '../../services/translate';
import images from '../../assets';
import BackgroundView from '../../containers/backgroundView';
import Button from '../../components/button';
import { AuthContext } from '../../context';

const Home = () => {
  const { logout } = useContext(AuthContext);

  return (
    <BackgroundView>
      <View style={styles.info}>
        <Image source={images.onboarding} style={styles.image} />
        <Text style={styles.title}>{t('Bienvenido!')}</Text>
      </View>
      <Button onPress={logout} textKey={t('Logout')} />
    </BackgroundView>
  );
};

export default Home;
