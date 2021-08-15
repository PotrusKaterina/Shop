import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {colors} from '../../themes';
import styles from './styles';

interface Props {
  title: string;
  icon: any;
  onPress: Function;
  color?: string;
}

const OptionsListButton = ({title, icon, onPress, color}: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {icon}
      <Text style={[styles.title, {color: color || colors.white}]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default OptionsListButton;
