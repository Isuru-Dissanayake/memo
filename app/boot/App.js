import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {observer, Provider} from 'mobx-react';

import {SplashPage, SignUpPage} from '../components/pages/index';
import colors from '../theme/colors';
import {APP_PREFIX} from '../utility/constants/constants';
import AppContainer from '../mobx/utils/routes';

import navigationService from '../services/navigationServices';
import mobx from '../mobx/stores/index';

const stores = mobx();

@observer
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <Provider {...stores}>
        <View style={styles.container}>
          <AppContainer />
        </View>
      </Provider>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BACKGROUND_BLACK,
  },
});
