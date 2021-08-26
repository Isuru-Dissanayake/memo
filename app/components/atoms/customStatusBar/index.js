import React, { Fragment } from "react";
import { Platform, View, StatusBar } from "react-native";
import colors from "../../../theme/colors";

const CustomStatusBar = ({ bgColor, lightContent, hidden }) => (
  <Fragment>
    <StatusBar
      backgroundColor={colors.BACKGROUND_BLACK}
      barStyle={lightContent ? "light-content" : "dark-content"}
      hidden={hidden}
    />
  </Fragment>
);

export default CustomStatusBar;
