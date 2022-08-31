import React, { useEffect, useState } from 'react';
import { Switch, Text, View } from 'react-native';

import styles from './styles';
import t from '../../services/translate';
import Button from '../../components/button';
import BackgroundView from '../../containers/backgroundView';
import InputForm from '../../components/input';
import { useNavigation, useRoute } from '@react-navigation/native';
import { editTask, getTaskById } from '../../services/api';

const EditTask = () => {
  const [task, setTask] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);
  const { goBack } = useNavigation();
  const [appLoading, setAppLoading] = useState(false);
  const route = useRoute();
  const { item } = route.params;

  const toggleSwitch = () => setIsCompleted(previousState => !previousState);

  useEffect(() => {
    getTask();
  }, []);

  const getTask = () => {
    setAppLoading(true);
    getTaskById(item)
      .then(res => {
        const { data } = res.data;
        setTask(data.description);
        setIsCompleted(data.completed);
      })
      .catch(console.error)
      .finally(() => setAppLoading(false));
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
      <View style={styles.inputContainer}>
        <InputForm text={task} onChangeText={setTask} />
        <View style={{ marginTop: 20 }}>
          <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={isCompleted ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isCompleted}
          />
        </View>
        <Text>Completed</Text>
      </View>
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
