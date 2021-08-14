import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from './styles';

const ManageItems = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Create your shop item</Text>
      </View>
      <View style={styles.inputsContainer}>
        <TextInput placeholder="Title" style={styles.textInput} />
        <TextInput placeholder="Description" style={styles.textInput} />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Create!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ManageItems;
