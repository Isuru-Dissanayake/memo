import React from 'react';
import {View, Text, Keyboard} from 'react-native';
import styles from './styles';
import LOGGER from '../../../utility/logger';

import {StandardActivityIndicator} from '../../atoms/index';
import {LogInTemplate} from '../../templates/index';
import ValidateUserInfo from '../../../utility/validateUserInfo';
import {SIGN_UP_STATUS} from '../../../utility/constants/constants';

import AuthApi from '../../../utility/apis/auth/authApi';

class SignUpPage extends React.Component {
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
    this.AuthApi = new AuthApi();
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
    const signupStatus = await this.AuthApi.createUserWithEmail(
      email,
      password,
    );
    this.setState({loading: false});
    switch (signupStatus) {
      case SIGN_UP_STATUS.ACCOUNT_CREATED:
        this.setState({isError: false});
        return;
      case SIGN_UP_STATUS.EMAIL_ALREADY_USED:
        this.setState({isError: true, errorMessage: 'Email already is use'});
        return;
      case SIGN_UP_STATUS.INVALID_EMAIL:
        this.setState({isError: true, errorMessage: 'Invalid Email'});
        return;
    }
  }
  componentDidMount() {
    this.ValidateUserInfo = new ValidateUserInfo();
  }

  render() {
    const {loading, isDisabled} = this.state;
    return (
      <View style={styles.container}>
        {loading && <StandardActivityIndicator />}
        <LogInTemplate
          title={'Welcome!'}
          subtitle={'Please enter your email and password'}
          buttonText={'Confirm'}
          loading={loading}
          isDisabled={isDisabled}
          onChangeEmail={email => {
            this.onChangeEmail(email);
          }}
          onchangePassword={password => this.onchangePassword(password)}
          onPressConfirm={() => this.onPressConfirm()}
        />
      </View>
    );
  }
}

export default SignUpPage;
