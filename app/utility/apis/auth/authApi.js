import auth from '@react-native-firebase/auth';
import {SIGN_UP_STATUS, LOG_IN_STATUS} from '../../constants/constants';

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
      });
    return signupStatus;
  }

  async signInUserWithEmail(email, password) {
    let logInStatus;
    await auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        logInStatus = LOG_IN_STATUS.SUCCESSFUL;
      })
      .catch(error => {
        if (error.code === 'auth/invalid-email') {
          logInStatus = LOG_IN_STATUS.INVALID_EMAIL;
        }
        if (error.code === 'auth/user-not-found') {
          logInStatus = LOG_IN_STATUS.USER_NOT_FOUND;
        }
        if (error.code === 'auth/wrong-password') {
          logInStatus = LOG_IN_STATUS.WRONG_PASSWORD;
        }
        if (error.code === 'auth/user-disabled') {
          logInStatus = LOG_IN_STATUS.USER_DISABLED;
        }
      });
    console.log(logInStatus);
    return logInStatus;
  }

  async signOutCurrentUser() {
    await auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  }

  async updateCurrentUser(data) {
    await auth().currentUser.updateProfile(data);
  }

  getCurrentUser() {
    const user = auth().currentUser;
    return user;
  }
}

export default AuthApi;
