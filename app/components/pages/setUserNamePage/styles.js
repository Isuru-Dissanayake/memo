import { StyleSheet, Platform } from "react-native";
import commonStyles from "../../../theme/styles/commonStyles";
import COLORS from "../../../theme/colors";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  textInputContainer: {
    width: "100%",
  },
  textInput: {
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: 50,
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
});
