import React, {useState} from 'react';
import {View, FlatList, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Happy from '../../../images/frog/happy';
import ListEmptyComponent from '../../components/listEmptyComponent';
import MainShopListItem from '../../components/mainShopListItem';
import {addArchivedItem} from '../../store/actions/appActions';
import {getArchivedList, getList} from '../../store/selectors/appSelectors';
import {colors, Images} from '../../themes';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ARCHIVED_LIST, SHOPPING_LIST} from '../../config/asyncKeys';
import OptionsListButton from '../../components/optionsListButton';
import {sortingByNewerData, sortingByOlderData} from '../../services/sorting';

const MainScreen = ({navigation}) => {
  const [isByNewerData, setIsByNewerData] = useState(true);
  const dispatch = useDispatch();
  const shopList = useSelector(getList);
  const archivedList = useSelector(getArchivedList);

  const onPressArchived = async () => {
    navigation.navigate('ArchivedScreen');
  };

  const onPressListItem = async (item, index) => {
    dispatch(addArchivedItem({index, item}));
    await AsyncStorage.setItem(
      ARCHIVED_LIST,
      JSON.stringify([...archivedList, item]),
    );
    let newShopList = shopList;
    newShopList.splice(index, 1);
    await AsyncStorage.setItem(SHOPPING_LIST, JSON.stringify(newShopList));
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
        <OptionsListButton
          onPress={() => setIsByNewerData(!isByNewerData)}
          title={'Sort'}
          icon={<Images.List height="50%" width="30%" color={colors.white} />}
        />
        <OptionsListButton
          onPress={onPressArchived}
          title={'Archived'}
          icon={
            <Images.Archived height="50%" width="30%" color={colors.white} />
          }
        />
      </View>
      <View style={styles.listContainer}>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          ListEmptyComponent={<ListEmptyComponent />}
          data={shopList.sort(
            isByNewerData ? sortingByNewerData : sortingByOlderData,
          )}
          renderItem={({item, index}) => (
            <MainShopListItem {...{...item, index}} onPress={onPressListItem} />
          )}
        />
      </View>
    </View>
  );
};

export default MainScreen;
