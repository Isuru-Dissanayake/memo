import { StyleSheet, Platform } from "react-native";
import commonStyles from "../../../theme/styles/commonStyles";
import COLORS from "../../../theme/colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 100,
    paddingBottom: 30,
    alignItems: "center",
  },
  splashText: {
    ...commonStyles.headerBold,
    marginTop: -30,
  },
  logoStyles: {
    height: 120,
    width: 120,
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  signUpbuttonStyle: {
    width: 200,
    marginBottom: 15,
  },
  logInbuttonStyle: {
    backgroundColor: COLORS.BACKGROUND_WHITE,
    width: 200,
    marginBottom: 15,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  logInText: {
    color: COLORS.PRIMARY_BLUE,
  },
});
