import React from 'react';
import {View, FlatList, Text, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import Happy from '../../../images/frog/happy';
import Archived from '../../../images/icons/archived';
import ListEmptyComponent from '../../components/listEmptyComponent';
import MainShopListItem from '../../components/mainShopListItem';
import {getList} from '../../store/selectors/appSelectors';
import {colors} from '../../themes';
import styles from './styles';

const MainScreen = ({navigation}) => {
  const shopList = useSelector(getList);

  const onPressArchived = () => {
    navigation.navigate('ArchivedScreen')
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
        <TouchableOpacity onPress={onPressArchived} style={styles.archivedButton}>
          <Archived height="45%" width="30%" color={colors.white} />
          <Text style={styles.archivedButtonText}>Archived</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          ListEmptyComponent={<ListEmptyComponent />}
          data={shopList}
          renderItem={({item}) => <MainShopListItem {...{...item}} />}
        />
      </View>
    </View>
  );
};

export default MainScreen;
