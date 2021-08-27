import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './styles';

const StandardTextInput = props => {
  const {
    containerStyle,
    textStyle,
    placeholder,
    ref,
    keyboardType,
    placeholderTextColor,
    autoCompleteType,
    autoFocus,
    editable,
    multiline,
    onChangeText,
    secureTextEntry,
  } = props;
  return (
    <View style={[styles.textInputContainer, containerStyle]}>
      <TextInput
        autoFocus={autoFocus}
        autoCompleteType={autoCompleteType}
        style={[styles.textInput, textStyle]}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        ref={ref}
        keyboardType={keyboardType}
        editable={editable}
        multiline={multiline}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default StandardTextInput;
