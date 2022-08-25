import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import BackgroundView from '../../containers/backgroundView';
import styles from './styles';
import InputForm from '../../components/input';
import t from '../../services/translate';
import { useNavigation } from '@react-navigation/native';
import Button from '../../components/button';
import Link from '../../components/link';
import { userRegister } from '../../services/api';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { navigate } = useNavigation();

  const onSubmit = () => {
    const data = {
      name: name,
      email: email,
      password: password,
    };
    userRegister(data);
  };

  return (
    <BackgroundView>
      <KeyboardAwareScrollView>
        <View style={styles.info}>
          <Text style={styles.title}>{t('sign_up.title')}</Text>
          <Text style={styles.text}>{t('sign_up.subtitle')}</Text>
        </View>
        <View style={styles.inputContainer}>
          <InputForm
            text={name}
            onChangeText={setName}
            placeholder={t('sign_up.form.placeholder_name')}
          />
          <InputForm
            text={email}
            onChangeText={setEmail}
            placeholder={t('sign_up.form.placeholder_email')}
          />
          <InputForm
            text={password}
            onChangeText={setPassword}
            placeholder={t('sign_up.form.placeholder_password')}
          />
          <InputForm
            text={confirmPassword}
            onChangeText={setConfirmPassword}
            placeholder={t('sign_up.form.placeholder_confirm_password')}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button onPress={onSubmit} textKey="sign_up.button" />
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.textQuestion}>Already have an account ?</Text>
            <Link
              onPress={() => navigate('Login')}
              textKey="sign_up.sign_in_button"
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </BackgroundView>
  );
};

export default SignUp;
