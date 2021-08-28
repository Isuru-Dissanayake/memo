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
        username: null,
      })
      .then(() => {
        console.log('New User Created');
      });
  }

  async updateUserData(uid, data) {
    await firestore()
      .collection('users')
      .doc(uid)
      .update(data)
      .then(() => {
        console.log('User updated!');
      });
  }
}

export default AccountApi;
