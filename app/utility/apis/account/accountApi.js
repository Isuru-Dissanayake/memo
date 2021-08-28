import firestore from '@react-native-firebase/firestore';
import {inject, observer} from 'mobx-react';

class AccountApi {
  constructor(props) {}

  async createNewUser(uid, email) {
    await firestore()
      .collection('users')
      .doc(uid)
      .set({
        email: email,
      })
      .then(() => {
        console.log('New User Created');
      });
  }
}

export default AccountApi;
