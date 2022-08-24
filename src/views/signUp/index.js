import React from 'react';
import { Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import BackgroundView from '../../containers/backgroundView';
import styles from './styles';
import Button from '../../components/button';
import InputForm from '../../components/input';
import t from '../../services/translate';
import { useNavigation } from '@react-navigation/native';
import TextLink from '../../components/text';
import ButtonText from '../../components/buttonText';

const SignUp = () => {
  const [text, onChangeText] = React.useState('');
  const [text1, onChangeText1] = React.useState('');
  const [text2, onChangeText2] = React.useState('');
  const [text3, onChangeText3] = React.useState('');
  const { navigate } = useNavigation();

  return (
    <BackgroundView>
      <KeyboardAwareScrollView>
        <View style={styles.info}>
          <Text style={styles.title}>{t('onboarding.inputTitle')}</Text>
          <Text style={styles.text}>{t('onboarding.inputSubtitle')}</Text>
        </View>
        <View style={styles.inputContainer}>
          <InputForm
            text={text}
            onChangeText={onChangeText}
            placeholder={'Enter your full name'}
            placeholderTextColor="#000"
          />
          <InputForm
            text={text1}
            onChangeText={onChangeText1}
            placeholder={'Enter your e-mail'}
            placeholderTextColor="#000"
          />
          <InputForm
            text={text2}
            onChangeText={onChangeText2}
            placeholder={'Enter password'}
            placeholderTextColor="#000"
          />
          <InputForm
            text={text3}
            onChangeText={onChangeText3}
            placeholder={'Confirm password'}
            placeholderTextColor="#000"
          />
        </View>
        <View style={styles.buttonContainer}>
          <ButtonText
            onPress={() => navigate('Login')}
            textKey="onboarding.buttonRegister"
          />
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.textQuestion}>Already have an account ?</Text>
            <TextLink textKey="onboarding.signIn" />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </BackgroundView>
  );
};

export default SignUp;
