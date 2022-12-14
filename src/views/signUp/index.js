import React, { useContext, useState } from 'react';
import { Alert, Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import InputForm from '../../components/input';
import t from '../../services/translate';
import Button from '../../components/button';
import Link from '../../components/link';
import { userRegister } from '../../services/api';
import { AuthContext } from '../../context';
import BackgroundView from '../../containers/backgroundView';
import { showFlashMessage } from '../../components/flashMessage';

const SignUp = () => {
  const [name, setName] = useState('test');
  const [email, setEmail] = useState('test1@mail.com');
  const [password, setPassword] = useState('1234567');
  const [confirmPassword, setConfirmPassword] = useState('1234567');
  const [errorMessage, setErrorMessage] = useState('');
  const { navigate } = useNavigation();
  const { login } = useContext(AuthContext);

  const onSubmit = async () => {
    setErrorMessage('');

    if (password.length == 0) {
      showFlashMessage({
        message: t('input_validation.password_required'),
        type: 'danger',
      });
      return;
    } else if (password.length < 7) {
      showFlashMessage({
        message: t('input_validation.password_length'),
        type: 'danger',
      });
      return;
    } else if (password !== confirmPassword) {
      showFlashMessage({
        message: t('input_validation.password_compare'),
        type: 'danger',
      });
      return;
    }

    const data = {
      name: name,
      email: email,
      password: password,
    };
    try {
      const response = await userRegister(data);
      login({ ...response.data });
      console.tron.log('response: ', response);
    } catch (e) {
      setErrorMessage(e.response.data);
      showFlashMessage({
        message: t('input_validation.backend_error'),
        description: e.response.data,
        type: 'danger',
      });
      console.tron.log('error: ', e.response.data);
    }
  };

  return (
    <BackgroundView>
      <KeyboardAwareScrollView
        bounces={false}
        contentContainerStyle={{ flexGrow: 1 }}>
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
        </View>
        <View style={styles.buttonContainer}>
          <Button onPress={onSubmit} textKey="sign_up.button" />
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.textQuestion}>{t('sign_up.question')}</Text>
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
