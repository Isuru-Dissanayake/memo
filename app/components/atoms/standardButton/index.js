/*
 * Cellcard Selfcare Application 10.6.2019
 * Copyright © 2019 Cellcard. All rights reserved.
 */

import React from "react";
import { TouchableOpacity, ViewPropTypes, View, Text } from "react-native";
import PropTypes from "prop-types";
import { styles } from "./style";

const StandardButton = (props) => {
  const { title, containerStyle, textStyle, onPress, disabled, activeOpacity } =
    props;

  return (
    <TouchableOpacity
      disabled={disabled}
      activeOpacity={activeOpacity}
      style={[
        styles.container,
        disabled ? styles.disabledStyle : styles.container,
        containerStyle,
      ]}
      onPress={() => {
        onPress();
      }}
    >
      <Text style={[disabled ? styles.disabledText : styles.text, , textStyle]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

StandardButton.propTypes = {
  title: PropTypes.string,
  containerStyle: ViewPropTypes.style,
  onPress: PropTypes.func,
};

StandardButton.defaultProps = {
  title: "Submit",
  containerStyle: null,
  onPress: () => {},
};

export default StandardButton;
