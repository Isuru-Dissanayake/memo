import {StyleSheet, Platform} from 'react-native';
import commonStyles from '../../../theme/styles/commonStyles';
import colors from '../../../theme/colors';

export default StyleSheet.create({
  container: {
    minHeight: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.BACKGROUND_BLACK,
    marginTop: 0,
    paddingTop: 15,
    paddingBottom: 20,
    borderBottomWidth: 0.3,
    borderBottomColor: colors.BORDER_WHITE,
  },
});
