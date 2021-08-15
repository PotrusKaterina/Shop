import React from 'react';
import {View, FlatList, Text, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Happy from '../../../images/frog/happy';
import Archived from '../../../images/icons/archived';
import ListEmptyComponent from '../../components/listEmptyComponent';
import MainShopListItem from '../../components/mainShopListItem';
import {addArchivedItem} from '../../store/actions/appActions';
import {getList} from '../../store/selectors/appSelectors';
import {colors} from '../../themes';
import styles from './styles';

const MainScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const shopList = useSelector(getList);

  const onPressArchived = () => {
    navigation.navigate('ArchivedScreen');
  };

  const onPressListItem = (item, index) => {
    console.log('item', item, index);
    dispatch(addArchivedItem({index, item}));
  };

  return (
    <View style={styles.container}>
      <View style={styles.greenContainer}>
        <Text style={styles.title}>Shop Items</Text>
        <View style={styles.iconContainer}>
          <Happy height="100%" width="100%" />
        </View>
      </View>
      <View style={styles.raundView}>
        <TouchableOpacity
          onPress={onPressArchived}
          style={styles.archivedButton}>
          <Archived height="45%" width="30%" color={colors.white} />
          <Text style={styles.archivedButtonText}>Archived</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          ListEmptyComponent={<ListEmptyComponent />}
          data={shopList}
          renderItem={({item, index}) => (
            <MainShopListItem {...{...item, index}} onPress={onPressListItem} />
          )}
        />
      </View>
    </View>
  );
};

export default MainScreen;
