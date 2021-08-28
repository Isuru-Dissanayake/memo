import {
  createNavigationContainerRef,
  CommonActions,
} from '@react-navigation/native';

const navigationRef = createNavigationContainerRef();

function navigateWithState(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

function navigate(name, params) {
  navigationRef.dispatch(
    CommonActions.reset({
      index: 1,
      routes: [{name: name, params: params}],
    }),
  );
}
export default {navigationRef, navigateWithState, navigate};
