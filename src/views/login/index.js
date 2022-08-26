import React, { useState } from 'react';
import { Image, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import t from '../../services/translate';
import images from '../../assets';
import BackgroundView from '../../containers/backgroundView';
import InputForm from '../../components/input';
import Button from '../../components/button';
import Link from '../../components/link';

const Login = () => {
  const [text, onChangeText] = useState('');
  const [text1, onChangeText1] = useState('');
  const { navigate } = useNavigation();

  return (
    <BackgroundView>
      <View style={styles.info}>
        <Text style={styles.title}>{t('onboarding.titleLogin')}</Text>
        <Image source={images.login} style={styles.image} />
      </View>
      <View style={styles.inputContainer}>
        <InputForm
          text={text}
          onChangeText={onChangeText}
          placeholder={'Enter your e-mail'}
        />
        <InputForm
          text={text1}
          onChangeText={onChangeText1}
          placeholder={'Confirm password'}
        />
      </View>
      <View style={styles.textContainer}>
        <Link
          textKey="onboarding.forgetPassword"
          onPress={() => navigate('Home')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => navigate('Home')}
          textKey="onboarding.buttonLogin"
        />
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.textQuestion}>Don’t have an account?</Text>
          <Link
            onPress={() => navigate('SignUp')}
            textKey="onboarding.signUp"
          />
        </View>
      </View>
    </BackgroundView>
  );
};

export default Login;
