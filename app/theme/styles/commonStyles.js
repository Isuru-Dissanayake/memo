import { StyleSheet, Platform } from "react-native";
import {
  responsiveHeight,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import colors from "../colors";

export default StyleSheet.create({
  appBackground: {
    backgroundColor: colors.BACKGROUND_BLACK,
  },

  headerBold: {
    color: colors.PRIMARY_WHITE,
    fontFamily: "SFUIDisplay-Bold",
    fontSize: 24,
  },

  headerMedium: {
    color: colors.PRIMARY_WHITE,
    fontFamily: "SFUIDisplay-Medium",
    fontSize: 24,
  },

  bodyText: {
    color: colors.PRIMARY_WHITE,
    fontFamily: "SFUIDisplay-Medium",
    fontSize: 16,
  },
  bodySecondaryText: {
    color: colors.PRIMARY_WHITE,
    opacity: 0.64,
    fontFamily: "SFUIDisplay-Medium",
    fontSize: 16,
  },
});
