import React from 'react';
import {View, Text, StatusBar, Image} from 'react-native';
import styles from './styles';
import auth from '@react-native-firebase/auth';
import LOGGER from '../../../utility/logger';

import {
  CustomStatusBar,
  StandardButton,
  StandardActivityIndicator,
} from '../../atoms/index';
import {logo} from '../../../assets/images';
import navigationServices from '../../../services/navigationServices';
import {NAVIGATION_SCREENS} from '../../../utility/constants/constants';

class SplashPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      initializing: true,
      user: null,
    };
  }

  onSignUpPress = () => {
    navigationServices.navigateWithState(NAVIGATION_SCREENS.SignUpPage);
  };

  onAuthStateChanged(user) {
    const {initializing} = this.state;
    this.setState({user: user});
  }

  componentDidMount() {
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
            onPress={() => {}}
            containerStyle={styles.logInbuttonStyle}
            textStyle={styles.logInText}
          />
        </View>
      </View>
    );
  }
}

export default SplashPage;
