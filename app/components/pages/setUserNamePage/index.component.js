import React from 'react';
import {View, Text, Keyboard} from 'react-native';
import styles from './styles';
import LOGGER from '../../../utility/logger';
import {inject, observer} from 'mobx-react';

import {StandardActivityIndicator} from '../../atoms/index';
import {LogInTemplate} from '../../templates/index';

import {AccountApi} from '../../../utility/apis';

@inject('authStore')
@observer
class SetUserNamePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      isUserNameAvailable: false,
      isDisabled: true,
      isError: false,
      errorMessage: null,
      username: null,
    };
    this.accountApi = new AccountApi();
  }

  onChangeUserName(username) {
    if (username.length <= 15 && username.length >= 3) {
      this.setState({username: username, isDisabled: false});
    } else {
      this.setState({username: null, isDisabled: true});
    }
  }

  async onPressConfirm() {
    this.setState({loading: true});
    Keyboard.dismiss();
    const {username} = this.state;
    const {authStore} = this.props;
    const currentUser = authStore.getCurrentUser();
    await this.accountApi.updateUserData(currentUser.uid, {username: username});
    this.setState({loading: false});
  }

  componentDidMount() {}

  render() {
    const {loading, isDisabled, isError, errorMessage} = this.state;
    return (
      <View style={styles.container}>
        {loading && <StandardActivityIndicator />}
        <LogInTemplate
          isUserNameTemplate={true}
          title={'Congradulations!'}
          subtitle={'Enter your username to finish sign up'}
          buttonText={'Confirm'}
          loading={loading}
          isDisabled={isDisabled}
          onChangeUserName={username => {
            this.onChangeUserName(username);
          }}
          onPressConfirm={() => this.onPressConfirm()}
          isError={isError}
          errorMessage={errorMessage}
        />
      </View>
    );
  }
}

export default SetUserNamePage;
