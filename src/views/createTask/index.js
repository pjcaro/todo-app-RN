import React, { useState } from 'react';
import { Switch, Text, View } from 'react-native';

import styles from './styles';
import t from '../../services/translate';
import Button from '../../components/button';
import BackgroundView from '../../containers/backgroundView';
import InputForm from '../../components/input';
import { useNavigation } from '@react-navigation/native';
import { createTask } from '../../services/api';
import { showFlashMessage } from '../../components/flashMessage';
import Form from '../../components/form';

const CreateTask = () => {
  const [task, setTask] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);
  const { goBack } = useNavigation();

  const toggleSwitch = () => setIsCompleted(previousState => !previousState);

  const onSubmit = () => {
    if (task == '') {
      showFlashMessage({
        message: t('input_validation.task_required'),
        type: 'danger',
      });
      return;
    }
    const data = {
      description: task,
      completed: isCompleted,
    };
    createTask(data).then(() => goBack());
  };

  return (
    <BackgroundView>
      <Form
        task={task}
        setTask={setTask}
        toggleSwitch={toggleSwitch}
        isCompleted={isCompleted}
        text={t('form.switch_text')}
      />
      <View style={styles.buttonContainer}>
        <Button onPress={onSubmit} textKey="create_task.button" />
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={() => goBack()} textKey="create_task.return" />
      </View>
    </BackgroundView>
  );
};

export default CreateTask;
