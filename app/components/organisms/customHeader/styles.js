import {StyleSheet, Platform} from 'react-native';
import commonStyles from '../../../theme/styles/commonStyles';
import colors from '../../../theme/colors';

export default StyleSheet.create({
  container: {
    minHeight: 50,
    width: '100%',
    backgroundColor: colors.BACKGROUND_BLACK,
    marginTop: 0,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    borderBottomWidth: 0.3,
    borderBottomColor: colors.BORDER_WHITE,
  },
  logoStyles: {
    height: 40,
    width: 40,
  },
});
