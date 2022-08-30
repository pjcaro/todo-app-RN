import React, { useContext, useEffect, useState } from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  Switch,
  Text,
  View,
} from 'react-native';

import styles from './styles';
import t from '../../services/translate';
import Button from '../../components/button';
import { AuthContext } from '../../context';
import { getTask } from '../../services/api';
import images from '../../assets';
import Item from '../../components/item';
import Loader from '../../components/loader';

const Home = () => {
  const [task, setTask] = useState('');
  const [appLoading, setAppLoading] = useState(false);
  const { logout } = useContext(AuthContext);

  useEffect(() => {
    getAllTask();
  }, []);

  const getAllTask = () => {
    setAppLoading(true);
    getTask()
      .then(res => {
        const { data } = res.data;
        setTask(data);
      })
      .catch(console.error)
      .finally(() => setAppLoading(false));
  };

  const renderItem = ({ item }) => <Item title={item.description} />;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Image source={images.elipse} style={styles.elipse} />
      <Text style={styles.title}>{t('home.title')}</Text>
      <FlatList
        data={task}
        renderItem={renderItem}
        keyExtractor={item => item._id}
        refreshing={appLoading}
        onRefresh={getAllTask}
      />
      <View style={styles.buttonContainer}>
        <Button onPress={logout} textKey={t('Logout')} />
      </View>
    </SafeAreaView>
  );
};

export default Home;
