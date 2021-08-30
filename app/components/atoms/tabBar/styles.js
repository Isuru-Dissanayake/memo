import {StyleSheet, Platform} from 'react-native';
import commonStyles from '../../../theme/styles/commonStyles';
import colors from '../../../theme/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.BACKGROUND_BLACK,
    width: '100%',
    paddingLeft: 10,
    borderTopWidth: 0.3,
    borderTopColor: colors.BORDER_WHITE,
  },
});
