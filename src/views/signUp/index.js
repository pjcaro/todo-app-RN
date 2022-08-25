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

const SignUp = () => {
  const [text, onChangeText] = useState('');
  const [text1, onChangeText1] = useState('');
  const [text2, onChangeText2] = useState('');
  const [text3, onChangeText3] = useState('');
  const { navigate } = useNavigation();

  return (
    <BackgroundView>
      <KeyboardAwareScrollView>
        <View style={styles.info}>
          <Text style={styles.title}>{t('sign_up.title')}</Text>
          <Text style={styles.text}>{t('sign_up.subtitle')}</Text>
        </View>
        <View style={styles.inputContainer}>
          <InputForm
            text={text}
            onChangeText={onChangeText}
            placeholder={t('sign_up.form.placeholder_name')}
          />
          <InputForm
            text={text1}
            onChangeText={onChangeText1}
            placeholder={t('sign_up.form.placeholder_email')}
          />
          <InputForm
            text={text2}
            onChangeText={onChangeText2}
            placeholder={t('sign_up.form.placeholder_password')}
          />
          <InputForm
            text={text3}
            onChangeText={onChangeText3}
            placeholder={t('sign_up.form.placeholder_confirm_password')}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button onPress={() => navigate('Login')} textKey="sign_up.button" />
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
