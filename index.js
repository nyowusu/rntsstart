/**
 * @format
 */

// import {AppRegistry} from 'react-native';
import App from './App';
// import {name as appName} from './app.json';
import {Navigation} from 'react-native-navigation';

// AppRegistry.registerComponent(appName, () => App);
Navigation.registerComponent(`navigation.rnstart.WelcomeScreen`, () => App);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'navigation.rnstart.WelcomeScreen',
      },
    },
  });
});
