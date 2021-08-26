/*
* Cellcard Selfcare Application 25.04.2019
* Copyright © 2019 Cellcard. All rights reserved.
 */

import React from 'react';
import { CachedImage } from 'react-native-cached-image';
import { Image } from 'react-native';

const StandardImage = (props) => {
  const { source } = props;
  return Object.values(source).length > 0 ? <CachedImage {...props} /> : <Image {...props} />;
};

export default StandardImage;
