import React, {useState} from 'react';
import {View, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import ListArchivedEmptyComponent from '../../components/listArchivedEmptyComponent';
import MainShopListItem from '../../components/mainShopListItem';
import OptionsListButton from '../../components/optionsListButton';
import {sortingByNewerData, sortingByOlderData} from '../../services/sorting';
import {getArchivedList} from '../../store/selectors/appSelectors';
import {colors, Images} from '../../themes';
import styles from './styles';

const ArchivedScreen = () => {
  const [isByNewerData, setIsByNewerData] = useState(true);
  const shopList = useSelector(getArchivedList);

  return (
    <View style={styles.container}>
      <View style={styles.optionButtonsContainer}>
        <OptionsListButton
          color={colors.green}
          onPress={() => setIsByNewerData(!isByNewerData)}
          title={'Sort'}
          icon={<Images.List height="50%" width="30%" color={colors.green} />}
        />
      </View>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        ListEmptyComponent={<ListArchivedEmptyComponent />}
        data={shopList.sort(
          isByNewerData ? sortingByNewerData : sortingByOlderData,
        )}
        renderItem={({item}) => <MainShopListItem {...{...item}} />}
      />
    </View>
  );
};

export default ArchivedScreen;
