/*
 * Cellcard Selfcare Application 10.6.2019
 * Copyright © 2019 Cellcard. All rights reserved.
 */

import { StyleSheet } from "react-native";
import CommonStyles from "../../../theme/styles/commonStyles";
import COLORS from "../../../theme/colors";
import commonStyles from "../../../theme/styles/commonStyles";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.PRIMARY_BLUE,
    height: 40,
    borderRadius: 20,
    alignSelf: "center",
    padding: 5,
    alignItems: "center",
  },
  disabledStyle: {
    backgroundColor: COLORS.DISABLED_GRAY,
  },
  text: {
    ...commonStyles.bodyText,
    color: COLORS.PRIMARY_WHITE,
    textAlign: "center",
  },
  disabledText: {
    ...commonStyles.bodyText,
    color: COLORS.DISABLED_TEXT,
    textAlign: "center",
  },
});

export default styles;
