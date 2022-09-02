import React, { useCallback, useContext, useState } from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import {
  Alert,
  Image,
  Pressable,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import SwipeableFlatList from 'react-native-swipeable-list';
import { useDispatch, useSelector } from 'react-redux';

import styles from './styles';
import t from '../../services/translate';
import Button from '../../components/button';
import { AuthContext } from '../../context';
import { deleteTask, getTask } from '../../services/api';
import images from '../../assets';
import Item from '../../components/item';
import { getTasksAction } from '../../store/actions/tasks';

const Home = () => {
  // const [task, setTask] = useState('');
  // const [appLoading, setAppLoading] = useState(false);
  const { logout } = useContext(AuthContext);
  const { navigate } = useNavigation();
  const dispatch = useDispatch();
  const { tasks, isLoading } = useSelector(store => store.taskReducer);

  useFocusEffect(
    useCallback(() => {
      getAllTask();
    }, []),
  );

  const getAllTask = () => {
    dispatch(getTasksAction());
  };

  const deleteItem = _id => {
    deleteTask(_id).then(() => {
      getAllTask();
    });
  };

  const createTwoButtonAlert = (_id, description) =>
    Alert.alert(
      'Are you sure you want to delete this task?',
      `${description}`,
      [
        {
          text: 'Cancel',
          onPress: () => {},
          style: 'cancel',
        },
        { text: 'OK', onPress: () => deleteItem(_id) },
      ],
    );

  const QuickActions = item => {
    const { _id, description } = item.item;
    return (
      <View style={styles.container}>
        <View style={styles.button}>
          <Pressable onPress={() => createTwoButtonAlert(_id, description)}>
            <Text style={styles.buttonText}>Delete</Text>
          </Pressable>
        </View>
      </View>
    );
  };

  const renderItem = ({ item }) => (
    <Item
      item={item}
      onPress={() => navigate('EditTask', { item: item._id })}
    />
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Image source={images.elipse} style={styles.elipse} />
      <Text style={styles.title}>{t('home.title')}</Text>
      <SwipeableFlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={item => item._id}
        refreshing={isLoading}
        onRefresh={getAllTask}
        maxSwipeDistance={50}
        renderQuickActions={item => QuickActions(item)}
      />
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => navigate('CreateTask')}
          textKey={t('Create New Task')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={logout} textKey={t('Logout')} />
      </View>
    </SafeAreaView>
  );
};

export default Home;
