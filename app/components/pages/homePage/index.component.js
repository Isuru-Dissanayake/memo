import React from 'react';
import {View, Text, Keyboard} from 'react-native';
import styles from './styles';
import LOGGER from '../../../utility/logger';
import {inject, observer} from 'mobx-react';

import {StandardActivityIndicator} from '../../atoms/index';

import {AccountApi} from '../../../utility/apis';

@inject('authStore')
@observer
class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
    this.accountApi = new AccountApi();
  }

  componentDidMount() {}

  render() {
    const {loading} = this.state;
    return (
      <View style={styles.container}>
        {loading && <StandardActivityIndicator />}
        <Text style={styles.headerText}>HomePage</Text>
      </View>
    );
  }
}

export default HomePage;
