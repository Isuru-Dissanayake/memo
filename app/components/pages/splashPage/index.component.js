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

@inject('authStore')
@observer
class SplashPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      user: null,
    };
  }

  onSignUpPress = () => {
    navigationServices.navigateWithState(NAVIGATION_SCREENS.SignUpPage);
  };

  onAuthStateChanged(user) {
    let currentUser;
    if (user) {
      this.setState({user: user});
    }
    this.setState({loading: false});
  }

  async componentDidMount() {
    const {authStore} = this.props;
    this.setState({loading: true});
    const subscriber = await auth().onAuthStateChanged(user => {
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
