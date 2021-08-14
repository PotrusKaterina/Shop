import React from 'react';
import {View, FlatList, Text, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import Happy from '../../../images/frog/happy';
import Archived from '../../../images/icons/archived';
import ListEmptyComponent from '../../components/listEmptyComponent';
import MainShopListItem from '../../components/mainShopListItem';
import {getArchivedList} from '../../store/selectors/appSelectors';
import {colors} from '../../themes';
import styles from './styles';

const ArchivedScreen = () => {
  const shopList = useSelector(getArchivedList);

  return (
    <View style={styles.container}>
      {/* <View style={styles.listContainer}> */}
      <FlatList
        ListEmptyComponent={<ListEmptyComponent />}
        data={shopList}
        renderItem={({item}) => <MainShopListItem {...{...item}} />}
      />
      {/* </View> */}
    </View>
  );
};

export default ArchivedScreen;
