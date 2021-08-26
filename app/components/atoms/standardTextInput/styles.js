import { StyleSheet } from "react-native";
import commonStyles from "../../../theme/styles/commonStyles";
import COLORS from "../../../theme/colors";

export default StyleSheet.create({
  textInputContainer: {
    alignItems: "center",
    elevation: 10,
    backgroundColor: COLORS.TEXT_INPUT_BACKGROUND,
    borderRadius: 20,
    flexDirection: "row",
    padding: 2,
    paddingLeft: 20,
    paddingRight: 10,
  },
  textInput: {
    ...commonStyles.bodyText,
    minWidth: 100,
    minHeight: 50,
    flex: 1,
  },
});
