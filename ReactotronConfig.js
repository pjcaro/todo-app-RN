/* eslint-disable */
import { NativeModules } from 'react-native';
import Reactotron from 'reactotron-react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import ReactotronFlipper from 'reactotron-react-native/dist/flipper';
// import { reactotronRedux } from 'reactotron-redux';

let scriptHostname;

if (__DEV__ && !process.env.JEST_WORKER_ID) {
  const scriptURL = NativeModules.SourceCode.scriptURL;
  scriptHostname = scriptURL.split('://')[1].split(':')[0];
}

const reactotron = Reactotron.configure({
  name: 'Todo App',
  // createSocket: (path) => new ReactotronFlipper(path),
  ...(scriptHostname ? { host: scriptHostname } : {})
}).useReactNative({
  networking: {
    ignoreUrls: /(symbolicate)/
  }
})
  // .use(reactotronRedux());

if (__DEV__ && !process.env.JEST_WORKER_ID) {
  // reactotron.setAsyncStorageHandler(AsyncStorage);
  reactotron.connect();
  reactotron.clear();
  console.tron = Reactotron;
}

export default reactotron;
