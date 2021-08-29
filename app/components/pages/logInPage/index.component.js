import React from 'react';
import {View, Text, Keyboard} from 'react-native';
import styles from './styles';
import LOGGER from '../../../utility/logger';
import {inject, observer} from 'mobx-react';

import {StandardActivityIndicator} from '../../atoms/index';
import {LogInTemplate} from '../../templates/index';
import ValidateUserInfo from '../../../utility/validateUserInfo';
import navigationServices from '../../../services/navigationServices';
import {
  NAVIGATION_SCREENS,
  LOG_IN_STATUS,
} from '../../../utility/constants/constants';

import {AuthApi} from '../../../utility/apis';
@inject('authStore')
@observer
class LogInPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      email: null,
      password: null,
      isValidEmail: false,
      isValidPassword: null,
      isDisabled: true,
      isError: false,
      errorMessage: null,
    };
    this.authApi = new AuthApi();
  }

  isValidEmailPassword(e) {
    const {isValidEmail, isValidPassword, password} = this.state;
    if (isValidEmail && isValidPassword) {
      this.setState({isDisabled: false});
    } else {
      this.setState({isDisabled: true});
    }
  }

  onChangeEmail(email) {
    const {isValidEmail} = this.state;
    this.setState({isError: false});
    this.setState(
      {isValidEmail: this.ValidateUserInfo.isValidEmail(email)},
      () => {
        if (isValidEmail) {
          this.setState({email: email});
        } else {
          this.setState({email: null});
        }
        this.isValidEmailPassword();
      },
    );
  }

  onchangePassword(password) {
    const {isValidPassword} = this.state;
    this.setState({isError: false});
    this.setState(
      {
        isValidPassword: this.ValidateUserInfo.isValidPassword(password),
      },
      () => {
        if (isValidPassword) {
          this.setState({password: password});
        } else {
          this.setState({password: null});
        }
        this.isValidEmailPassword();
      },
    );
  }

  async onPressConfirm() {
    const {email, password} = this.state;
    Keyboard.dismiss();
    this.setState({loading: true});
    const logInStatus = await this.authApi.signInUserWithEmail(email, password);
    switch (logInStatus) {
      case LOG_IN_STATUS.SUCCESSFUL:
        this.setState({isError: false});
        navigationServices.navigate(NAVIGATION_SCREENS.HomePage);
        break;
      case LOG_IN_STATUS.USER_NOT_FOUND:
        this.setState({
          isError: true,
          errorMessage:
            'No account exists with this email. Try different email',
          loading: false,
        });
        break;
      case LOG_IN_STATUS.WRONG_PASSWORD:
        this.setState({
          isError: true,
          errorMessage: 'Wrong password',
          loading: false,
        });
        break;
      case LOG_IN_STATUS.USER_DISABLED:
        this.setState({
          isError: true,
          errorMessage: 'This account is disabled. Try different email',
          loading: false,
        });
        break;
    }
  }
  componentDidMount() {
    this.authApi.signOutCurrentUser();
    this.ValidateUserInfo = new ValidateUserInfo();
  }

  render() {
    const {loading, isDisabled, isError, errorMessage} = this.state;
    return (
      <View style={styles.container}>
        {loading && <StandardActivityIndicator />}
        <LogInTemplate
          title={'Welcome Back!'}
          subtitle={'Please enter your email and password'}
          buttonText={'Log In'}
          loading={loading}
          isDisabled={isDisabled}
          onChangeEmail={email => {
            this.onChangeEmail(email);
          }}
          onchangePassword={password => this.onchangePassword(password)}
          onPressConfirm={() => this.onPressConfirm()}
          isError={isError}
          errorMessage={errorMessage}
        />
      </View>
    );
  }
}

export default LogInPage;
