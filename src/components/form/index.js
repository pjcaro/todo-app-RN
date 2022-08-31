import styles from './styles';
import React from 'react';
import InputForm from '../input';
import { Switch, Text, View } from 'react-native';
import t from '../../services/translate';

const Form = ({ task, setTask, toggleSwitch, isCompleted, text }) => (
  <View style={styles.inputContainer}>
    <InputForm
      text={task}
      onChangeText={setTask}
      placeholder={t('create_task.placeholder')}
    />
    <View style={{ marginTop: 20 }}>
      <Switch
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={isCompleted ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isCompleted}
      />
    </View>
    <Text>{text}</Text>
  </View>
);

export default Form;
