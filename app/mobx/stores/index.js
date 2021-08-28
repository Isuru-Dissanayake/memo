import {create} from 'mobx-persist';
import AsyncStorage from '@react-native-community/async-storage';
import navigationService from '../../services/navigationServices';

import AuthStore from './auth/index';

const hydrate = create({
  storage: AsyncStorage,
  jsonify: true,
});

export default function () {
  const authStore = new AuthStore();
  return {
    authStore,
  };
}
