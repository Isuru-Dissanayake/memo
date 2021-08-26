import "react-native-gesture-handler";
import {AppRegistry} from 'react-native';
import App from './app/boot/App';
import {name as appName} from '././app/boot/app.json';

AppRegistry.registerComponent(appName, () => App);
