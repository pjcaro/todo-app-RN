import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Onboarding from '../views/onboarding';
import SignUp from '../views/signUp';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Onboarding} />
        <Stack.Screen name="Login" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
