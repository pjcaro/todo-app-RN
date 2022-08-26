import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Onboarding from '../views/onboarding';
import SignUp from '../views/signUp';
import Login from '../views/login';
import { AuthContext } from '../../App';
import Home from '../views/home';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  const authContext = useContext(AuthContext);

  console.tron.log('auth: ', authContext);

  return (
    <NavigationContainer>
      {authContext.isLoggedIn ? (
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
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
