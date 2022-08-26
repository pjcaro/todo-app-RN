import React, { useState } from 'react';
import { Alert, Text, View } from 'react-native';
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
  const [errorMessage, setErrorMessage] = useState('');
  const { navigate } = useNavigation();

  const onSubmit = async () => {
    setErrorMessage('');

    if (password.length == 0) {
      Alert.alert('La contraseña es requerida');
      return;
    } else if (password.length < 7) {
      Alert.alert('La contraseña no puede ser menor a 7 caracteres');
      return;
    } else if (password !== confirmPassword) {
      Alert.alert('Las contraseñas no coinciden');
      return;
    }

    const data = {
      name: name,
      email: email,
      password: password,
    };
    try {
      const response = await userRegister(data);
      console.tron.log('response: ', response);
    } catch (e) {
      setErrorMessage(e.response.data);
      console.tron.log('error: ', e.response.data);
    }
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
            secureTextEntry
          />
          <InputForm
            text={confirmPassword}
            onChangeText={setConfirmPassword}
            placeholder={t('sign_up.form.placeholder_confirm_password')}
            secureTextEntry
          />
          <Text>{errorMessage}</Text>
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
