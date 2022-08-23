import React from 'react';
import { TextInput, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import BackgroundView from '../../containers/backgroundView';
import styles from './styles';
import Button from '../../components/button';

const SignUp = () => {
  const [text, onChangeText] = React.useState('');
  const [text1, onChangeText1] = React.useState('Useless Text');
  const [text2, onChangeText2] = React.useState('Useless Text');

  return (
    <BackgroundView>
      <KeyboardAwareScrollView>
        <View style={{ marginTop: 400, flex: 1 }}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="Placeholder"
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeText1}
            value={text1}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeText2}
            value={text2}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button onPress={() => {}} textKey="onboarding.button" />
        </View>
      </KeyboardAwareScrollView>
    </BackgroundView>
  );
};

export default SignUp;
