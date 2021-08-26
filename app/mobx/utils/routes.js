import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';

import {SplashPage, SignUpPage} from '../../components/pages';
import {NAVIGATION_SCREENS} from '../../utility/constants/constants';
import colors from '../../theme/colors';

import navigationServices from '../../services/navigationServices';

const Stack = createStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.BACKGROUND_BLACK,
  },
};

function StackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={NAVIGATION_SCREENS.SplashPage}
      screenOptions={{
        headerMode: 'none',
      }}>
      <Stack.Screen
        name={NAVIGATION_SCREENS.SplashPage}
        component={SplashPage}
        options={{
          title: 'Memo',
        }}
      />
      <Stack.Screen
        name={NAVIGATION_SCREENS.SignUpPage}
        component={SignUpPage}
        options={{
          title: 'My profile',
        }}
      />
    </Stack.Navigator>
  );
}

export default function AppContainer() {
  return (
    <NavigationContainer theme={MyTheme} ref={navigationServices.navigationRef}>
      <StackNavigator />
    </NavigationContainer>
  );
}
