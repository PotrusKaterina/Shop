import React from 'react';
import {View, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import ListArchivedEmptyComponent from '../../components/listArchivedEmptyComponent';
import MainShopListItem from '../../components/mainShopListItem';
import {getArchivedList} from '../../store/selectors/appSelectors';
import styles from './styles';

const ArchivedScreen = () => {
  const shopList = useSelector(getArchivedList);

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        ListEmptyComponent={<ListArchivedEmptyComponent />}
        data={shopList}
        renderItem={({item}) => <MainShopListItem {...{...item}} />}
      />
    </View>
  );
};

export default ArchivedScreen;
