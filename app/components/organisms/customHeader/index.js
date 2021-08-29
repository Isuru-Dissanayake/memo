import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import LOGGER from '../../../utility/logger';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {memoLogo} from '../../../assets/images';

const CustomHeader = props => {
  const {route} = props;
  return (
    <View style={styles.container}>
      <View>
        <Image source={memoLogo} style={styles.logoStyles} />
      </View>
    </View>
  );
};

export default CustomHeader;
