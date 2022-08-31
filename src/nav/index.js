import React, { useContext, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboarding from '../views/onboarding';
import SignUp from '../views/signUp';
import Login from '../views/login';
import Home from '../views/home';
import { AuthContext } from '../context';
import LocalStorage from '../services/localStorage';
import { ActivityIndicator, View } from 'react-native';
import CreateTask from '../views/createTask';
import EditTask from '../views/editTask';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  const { user, login } = useContext(AuthContext);
  const [apploading, setAppLoading] = useState(true);
  console.tron.log('auth: ', user);

  useEffect(() => {
    LocalStorage.getItem('token').then(res => {
      console.tron.log('Token value: ', res);
      if (!res) {
        setAppLoading(false);
        return;
      }
      login({
        token: res,
      });
      setAppLoading(false);
    });
  }, []);

  return apploading ? (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator />
    </View>
  ) : (
    <NavigationContainer>
      {user?.isLoggedIn ? (
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="CreateTask" component={CreateTask} />
          <Stack.Screen name="EditTask" component={EditTask} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Onboarding">
          <Stack.Screen name="Onboarding" component={Onboarding} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Navigator;
