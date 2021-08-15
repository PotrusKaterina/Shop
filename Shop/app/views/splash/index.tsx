import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {TABS} from '../../config/routes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ARCHIVED_LIST, SHOPPING_LIST} from '../../config/asyncKeys';
import {useDispatch} from 'react-redux';
import {setList, setArchivedList} from '../../store/actions/appActions';
import {Images} from '../../themes';

const SplashScreen = ({navigation}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(TABS);
    }, 1000);
  });

  useEffect(() => {
    const keys = [SHOPPING_LIST, ARCHIVED_LIST];
    AsyncStorage.multiGet(keys)
      .then(result => {
        result.forEach(item => {
          if (item[1]) {
            switch (item[0]) {
              case SHOPPING_LIST: {
                const newArray = JSON.parse(item[1]);
                dispatch(setList(newArray));
                break;
              }
              case ARCHIVED_LIST: {
                dispatch(setArchivedList(JSON.parse(item[1])));
                break;
              }
            }
          }
        });
      })
      .catch(error => console.warn('error', error));
  });

  return (
    <View style={styles.container}>
      <Images.Rich height="50%" width="50%" />
    </View>
  );
};

export default SplashScreen;
