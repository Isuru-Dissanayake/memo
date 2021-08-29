import React from 'react';
import {View, Text, StatusBar, Image} from 'react-native';
import styles from './styles';
import auth from '@react-native-firebase/auth';
import LOGGER from '../../../utility/logger';
import {inject, observer} from 'mobx-react';

import {
  CustomStatusBar,
  StandardButton,
  StandardActivityIndicator,
} from '../../atoms/index';
import {logo} from '../../../assets/images';
import navigationServices from '../../../services/navigationServices';
import {NAVIGATION_SCREENS} from '../../../utility/constants/constants';
import {AuthApi} from '../../../utility/apis';

@inject('authStore')
@observer
class SplashPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      user: null,
    };
    this.authApi = new AuthApi();
  }

  onSignUpPress = () => {
    navigationServices.navigateWithState(NAVIGATION_SCREENS.SignUpPage);
  };

  onLogInPress = () => {
    navigationServices.navigateWithState(NAVIGATION_SCREENS.LogInPage);
  };

  onUserLogedIn() {
    navigationServices.navigate(NAVIGATION_SCREENS.HomePage);
  }

  onAuthStateChanged(user) {
    const {authStore} = this.props;
    if (user) {
      this.setState({user: user});
    }
    authStore.setCurrentUser(user);
    this.setState({loading: false});
  }

  componentDidMount() {
    const {user} = this.state;
    const {authStore} = this.props;
    this.setState({loading: true});
    const subscriber = auth().onAuthStateChanged(user => {
      this.onAuthStateChanged(user);
    });
  }

  render() {
    const {isLogedIn, user, loading} = this.state;
    return (
      <View style={styles.container}>
        {loading && <StandardActivityIndicator />}
        <CustomStatusBar lightContent={true} />
        {user ? (
          <View style={styles.logoContainer}>
            <Image source={logo} style={styles.logoStyles} />
            <Text style={styles.splashText}>Memo</Text>
            {this.onUserLogedIn()}
          </View>
        ) : (
          <View>
            <View style={styles.logoContainer}>
              <Image source={logo} style={styles.logoStyles} />
              <Text style={styles.splashText}>Memo</Text>
            </View>
            <View style={styles.buttonContainer}>
              <StandardButton
                title={'Sign Up'}
                onPress={this.onSignUpPress}
                containerStyle={styles.signUpbuttonStyle}
              />
              <StandardButton
                title={'Log In'}
                onPress={this.onLogInPress}
                containerStyle={styles.logInbuttonStyle}
                textStyle={styles.logInText}
              />
            </View>
          </View>
        )}
      </View>
    );
  }
}

export default SplashPage;
