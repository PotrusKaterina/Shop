import React from 'react';
import {View, FlatList, Text} from 'react-native';
import Happy from '../../../images/frog/happy';
import ListEmptyComponent from '../../components/listEmptyComponent';
import MainShopListItem from '../../components/mainShopListItem';
import styles from './styles';

const MainScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.greenContainer}>
        <Text style={styles.title}>Shop Items</Text>
        <View style={styles.iconContainer}>
          <Happy height="100%" width="100%" />
        </View>
      </View>
      <View style={styles.raundView} />
      <View style={styles.listContainer}>
        <FlatList
          ListEmptyComponent={<ListEmptyComponent />}
          data={[]}
          renderItem={({item}) => <MainShopListItem {...{...item}} />}
        />
      </View>
    </View>
  );
};

export default MainScreen;
