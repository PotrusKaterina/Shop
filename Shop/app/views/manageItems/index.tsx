import React, {useCallback, useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {addItem} from '../../store/actions/appActions';
import styles from './styles';

const ManageItems = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const creatListItem = useCallback(() => {
    if (title.length !== 0 && description.length !== 0) {
      dispatch(addItem({title, description, date: new Date()}));
      setTitle('');
      setDescription('');
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
