import React from 'react';
import {View, Text} from 'react-native';
import Read from '../../../images/frog/read';
import styles from './styles';

const ListEmptyComponent = () => {
  return (
    <View style={styles.container}>
      <Read height={100} width={100} />
      <Text style={styles.title}>{'Your shopping list is empty'}</Text>
    </View>
  );
};

export default ListEmptyComponent;
