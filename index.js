/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import Reactotron from './ReactotronConfig';

const TodoApp = __DEV__ ? Reactotron.overlay(App) : App;

AppRegistry.registerComponent(appName, () => TodoApp);
