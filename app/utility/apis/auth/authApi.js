import auth from '@react-native-firebase/auth';
import {SIGN_UP_STATUS} from '../../constants/constants';

class AuthApi {
  constructor(props) {}

  async createUserWithEmail(email, password) {
    let signupStatus;
    await auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
        signupStatus = SIGN_UP_STATUS.ACCOUNT_CREATED;
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
          signupStatus = SIGN_UP_STATUS.EMAIL_ALREADY_USED;
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
          signupStatus = SIGN_UP_STATUS.INVALID_EMAIL;
        }

        console.error(error);
      });
    return signupStatus;
  }

  async updateCurrentUserStatus() {
    await auth().onAuthStateChanged(user => {});
  }
}

export default AuthApi;
