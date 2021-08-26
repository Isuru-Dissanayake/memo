import React from "react";
import { View, ActivityIndicator, ViewPropTypes } from "react-native";
import PropTypes from "prop-types";
import { styles } from "./style";
import COLORS from "../../../theme/colors";

const StandardActivityIndicator = (props) => {
  const { size, color, hideAnimation, containerStyle } = props;

  return (
    <View style={[styles.container, containerStyle]}>
      <ActivityIndicator size={"large"} color={COLORS.PRIMARY_BLUE} />
    </View>
  );
};

StandardActivityIndicator.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  containerStyle: ViewPropTypes.style,
};

StandardActivityIndicator.defaultProps = {
  size: "large",
  color: "#4881FF",
  containerStyle: styles.container,
};

export default StandardActivityIndicator;
