import React, { useEffect, useState } from 'react';
import { Switch, Text, View } from 'react-native';

import styles from './styles';
import t from '../../services/translate';
import Button from '../../components/button';
import BackgroundView from '../../containers/backgroundView';
import InputForm from '../../components/input';
import { useNavigation, useRoute } from '@react-navigation/native';
import { editTask, getTaskById } from '../../services/api';
import Form from '../../components/form';
import { useSelector } from 'react-redux';

const EditTask = () => {
  const [task, setTask] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);
  const { goBack } = useNavigation();
  const [appLoading, setAppLoading] = useState(false);
  const route = useRoute();
  const { item } = route.params;
  const { tasks, isLoading } = useSelector(store => store.taskReducer);

  const toggleSwitch = () => setIsCompleted(previousState => !previousState);

  useEffect(() => {
    // getTask();
    getTask();
  }, []);

  const getTask = () => {
    const tarea = tasks.find(element => element.id === item.id);
    console.tron.log('tarea: ', tarea);
    setTask(tarea.description);
    setIsCompleted(tarea.completed);
  };

  const onSubmit = () => {
    const data = {
      description: task,
      completed: isCompleted,
    };
    editTask(data, item).then(() => goBack());
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
        <Button onPress={onSubmit} textKey="edit_task.button" />
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={() => goBack()} textKey="create_task.return" />
      </View>
    </BackgroundView>
  );
};

export default EditTask;
