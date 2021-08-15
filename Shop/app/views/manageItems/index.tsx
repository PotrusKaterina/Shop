import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useCallback, useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {SHOPPING_LIST} from '../../config/asyncKeys';
import {addItem} from '../../store/actions/appActions';
import {getList} from '../../store/selectors/appSelectors';
import styles from './styles';

const ManageItems = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();
  const shopList = useSelector(getList);

  const creatListItem = useCallback(async () => {
    if (
      !!title.replace(/\s/g, '').length &&
      !!description.replace(/\s/g, '').length
    ) {
      dispatch(
        addItem({
          title: title.trim(),
          description: description.trim(),
          date: new Date(),
        }),
      );
      setTitle('');
      setDescription('');
      await AsyncStorage.setItem(
        SHOPPING_LIST,
        JSON.stringify([
          ...shopList,
          {
            title: title.trim(),
            description: description.trim(),
            date: new Date(),
          },
        ]),
      );
    } else {
      alert('Both of fields should be filled');
    }
  }, [title, description]);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Create your shop item</Text>
      </View>
      <View style={styles.inputsContainer}>
        <TextInput
          value={title}
          onChangeText={setTitle}
          placeholder="Title"
          style={styles.textInput}
        />
        <TextInput
          value={description}
          onChangeText={setDescription}
          placeholder="Description"
          style={styles.textInput}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={creatListItem} style={styles.button}>
          <Text style={styles.buttonText}>Create!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ManageItems;
