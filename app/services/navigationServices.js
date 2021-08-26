import {createNavigationContainerRef} from '@react-navigation/native';

const navigationRef = createNavigationContainerRef();

function navigateWithState(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

export default {navigationRef, navigateWithState};
