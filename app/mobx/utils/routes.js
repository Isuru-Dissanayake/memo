import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

import {
  SplashPage,
  SignUpPage,
  SetUserNamePage,
  HomePage,
  LogInPage,
} from '../../components/pages';
import {CustomHeader} from '../../components/organisms';
import {TabBar} from '../../components/atoms';
import {
  NAVIGATION_SCREENS,
  NAVIGATION_TABS,
} from '../../utility/constants/constants';
import colors from '../../theme/colors';

import navigationServices from '../../services/navigationServices';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

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
      initialRouteName={NAVIGATION_SCREENS.HomePage}
      screenOptions={{
        headerStyle: {backgroundColor: colors.BACKGROUND_BLACK},
        headerTintColor: colors.PRIMARY_BLUE,
        headerTitleStyle: {
          fontFamily: 'SFUIDisplay-Medium',
          color: colors.PRIMARY_WHITE,
        },
      }}>
      <Stack.Screen
        name={NAVIGATION_SCREENS.SplashPage}
        component={SplashPage}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={NAVIGATION_SCREENS.SignUpPage}
        component={SignUpPage}
        options={{
          title: 'Sign Up',
          headerMode: 'screen',
        }}
      />
      <Stack.Screen
        name={NAVIGATION_SCREENS.SetUserNamePage}
        component={SetUserNamePage}
        options={{
          title: 'Sign Up',
          headerMode: 'screen',
        }}
      />
      <Stack.Screen
        name={NAVIGATION_SCREENS.HomePage}
        component={HomePage}
        options={{
          title: 'HomePage',
          headerMode: 'screen',
          header: props => <CustomHeader {...props} />,
        }}
      />
      <Stack.Screen
        name={NAVIGATION_SCREENS.LogInPage}
        component={LogInPage}
        options={{
          title: 'Log In',
          headerMode: 'screen',
        }}
      />
    </Stack.Navigator>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName={NAVIGATION_TABS.HomeTab}
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {height: 50, borderTopWidth: 0},
        tabBarBackground: props => <TabBar {...props} />,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === NAVIGATION_TABS.HomeTab) {
            iconName = focused ? 'reader' : 'reader-outline';
          }
          return <Icon name={iconName} size={30} color={'white'} />;
        },
      })}>
      <Tab.Screen name={NAVIGATION_TABS.HomeTab} component={StackNavigator} />
    </Tab.Navigator>
  );
}

export default function AppContainer() {
  return (
    <NavigationContainer theme={MyTheme} ref={navigationServices.navigationRef}>
      <TabNavigator />
    </NavigationContainer>
  );
}
