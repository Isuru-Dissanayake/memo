import {StyleSheet, Platform} from 'react-native';
import commonStyles from '../../../theme/styles/commonStyles';
import COLORS from '../../../theme/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    ...commonStyles.headerText,
  },
});
