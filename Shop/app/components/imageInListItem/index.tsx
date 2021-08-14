import React from 'react';
import {View, Image, Text} from 'react-native';
import Shopping from '../../../images/icons/shopping';
import {colors} from '../../themes';
import styles from './styles';

interface Props {
  image?: string;
}

const ImageInListItem = ({image}: Props) => {
  return (
    <View style={styles.imageContainer}>
      {image ? (
        <Image src />
      ) : (
        <Shopping color={colors.blue} height="50%" width="50%" />
      )}
    </View>
  );
};

export default ImageInListItem;
