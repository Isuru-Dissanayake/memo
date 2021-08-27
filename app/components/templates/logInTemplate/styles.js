import {StyleSheet, Platform} from 'react-native';
import commonStyles from '../../../theme/styles/commonStyles';
import COLORS from '../../../theme/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 70,
    paddingBottom: 30,
    alignItems: 'center',
  },
  textInputContainer: {
    width: '90%',
  },
  textInput: {
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: 35,
  },
  buttonStyle: {
    width: 200,
  },
  disabledButtonText: {
    color: COLORS.DISABLED_GRAY,
  },
  buttonText: {
    color: COLORS.PRIMARY_WHITE,
  },
  headerTextContainer: {
    textAlign: 'center',
    alignItems: 'center',
    marginBottom: 25,
  },
  headerText: {
    ...commonStyles.headerBold,
  },
  headerSubtitle: {
    ...commonStyles.bodySecondaryText,
  },
  errorMessageContainer: {
    marginTop: 5,
    alignItems: 'center',
  },
});
