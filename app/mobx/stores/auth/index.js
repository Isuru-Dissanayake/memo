import {observable, action} from 'mobx';
import {persist} from 'mobx-persist';

import {AuthApi} from '../../../utility/apis';

export default class AuthStore {
  constructor() {
    this.authApi = new AuthApi();
  }
  @observable currentUser = null;
  @observable isUserLogedIn = false;

  @action
  setCurrentUser(user) {
    this.currentUser = user;
    if (user) {
      this.setIsUserLogedIn(true);
    } else {
      this.setIsUserLogedIn(false);
    }
    console.log('setCurrentUser', user);
  }

  getCurrentUser() {
    return this.currentUser;
  }

  @action
  setIsUserLogedIn(status) {
    this.isUserLogedIn = status;
  }

  getIsUserLogedIn() {
    return this.isUserLogedIn;
  }
}
