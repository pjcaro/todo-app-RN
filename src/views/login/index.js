import React, { useContext, useState } from 'react';
import { Image, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import t from '../../services/translate';
import images from '../../assets';
import BackgroundView from '../../containers/backgroundView';
import InputForm from '../../components/input';
import Button from '../../components/button';
import Link from '../../components/link';
import { userLogin } from '../../services/api';
import { AuthContext } from '../../context';
import { showFlashMessage } from '../../components/flashMessage';

const Login = () => {
  const [email, setEmail] = useState('test1@mail.com');
  const [password, setPassword] = useState('1234567');
  const [loading, setLoading] = useState(false);

  const { login } = useContext(AuthContext);
  const { navigate } = useNavigation();

  const validate = () => {
    if (password.length === 0) {
      showFlashMessage({
        message: t('input_validation.password_required'),
        type: 'danger',
      });
      return false;
    } else if (password.length < 7) {
      showFlashMessage({
        message: t('input_validation.password_length'),
        type: 'danger',
      });
      return false;
    }

    return true;
  };

  const onSubmit = async () => {
    if (!validate()) {
      return;
    }
    setLoading(true);

    const data = {
      email: email,
      password: password,
    };
    try {
      const response = await userLogin(data);
      login({ ...response.data });
      console.tron.log('response: ', response);
    } catch (e) {
      showFlashMessage({
        message: e.response.data,
        type: 'danger',
      });
      console.tron.log('error: ', e.response.data);
    } finally {
      setLoading(false);
    }
  };

  return (
    <BackgroundView>
      <View style={styles.info}>
        <Text style={styles.title}>{t('sign_in.title')}</Text>
        <Image source={images.login} style={styles.image} />
      </View>
      <View style={styles.inputContainer}>
        <InputForm
          text={email}
          onChangeText={setEmail}
          placeholder={t('sign_in.form.placeholder_email')}
        />
        <InputForm
          text={password}
          onChangeText={setPassword}
          placeholder={t('sign_in.form.placeholder_confirm_password')}
          secureTextEntry
        />
      </View>
      <View style={styles.textContainer}>
        <Link
          textKey="sign_in.forgetPassword"
          onPress={() => navigate('SignUp')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={onSubmit} textKey="sign_in.button" loading={loading} />
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.textQuestion}>{t('sign_in.question')}</Text>
          <Link
            onPress={() => navigate('SignUp')}
            textKey="sign_in.sign_up_button"
          />
        </View>
      </View>
    </BackgroundView>
  );
};

export default Login;
