import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import LOGGER from '../../../utility/logger';
import COLORS from '../../../theme/colors';
import commonStyles from '../../../theme/styles/commonStyles';

import {
  CustomStatusBar,
  StandardButton,
  StandardActivityIndicator,
  StandardTextInput,
} from '../../atoms/index';

const LogInTemplate = props => {
  const {
    loading,
    onChangeEmail,
    onchangePassword,
    isDisabled,
    title,
    subtitle,
    buttonText,
    onPressConfirm,
    isError,
    errorMessage,
    emailRef,
    passwordRef,
  } = props;
  return (
    <View style={styles.container}>
      <CustomStatusBar lightContent={true} />
      <View style={styles.headerTextContainer}>
        <Text style={styles.headerText}>{title}</Text>
        <Text style={styles.headerSubtitle}>{subtitle}</Text>
      </View>
      <View style={styles.textInputContainer}>
        <StandardTextInput
          ref={emailRef}
          autoFocus={false}
          placeholder={'email'}
          placeholderTextColor={COLORS.PLACEHOLDER_TEXT}
          containerStyle={styles.textInput}
          onChangeText={email => onChangeEmail(email)}
        />
        <StandardTextInput
          ref={passwordRef}
          placeholder={'password'}
          placeholderTextColor={COLORS.PLACEHOLDER_TEXT}
          secureTextEntry={true}
          onChangeText={password => onchangePassword(password)}
        />
        {isError ? (
          <View style={styles.errorMessageContainer}>
            <Text style={commonStyles.errorText}>{errorMessage}</Text>
          </View>
        ) : (
          <View>
            <Text style={commonStyles.errorText}>{null}</Text>
          </View>
        )}
      </View>
      <View style={styles.buttonContainer}>
        <StandardButton
          disabled={isDisabled}
          title={buttonText}
          containerStyle={styles.buttonStyle}
          onPress={onPressConfirm}
        />
      </View>
    </View>
  );
};

export default LogInTemplate;
