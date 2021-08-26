import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {SplashPage, SignUpPage} from '../components/pages/index';
import colors from '../theme/colors';
import {APP_PREFIX} from '../utility/constants/constants';
import AppContainer from '../mobx/utils/routes';

import navigationService from '../services/navigationServices';

export default function App() {
  return (
    <View style={styles.container}>
      <AppContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BACKGROUND_BLACK,
  },
});
