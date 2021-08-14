import React from 'react';
import {View, Image, Text} from 'react-native';
import Shopping from '../../../images/icons/shopping';
import {colors} from '../../themes';
import ImageInListItem from '../imageInListItem';
import styles from './styles';

interface Props {
  title: string;
  description: string;
  date: string;
  image?: string;
}

const MainShopListItem = ({title, description, date, image}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.lineContainer}>
        <Text numberOfLines={1} style={styles.title}>
          {title}
        </Text>
        <View style={styles.mainContainer}>
          <ImageInListItem {...{image}} />
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>{description}</Text>
            <Text numberOfLines={1} style={styles.descriptionText}>
              {date}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default MainShopListItem;
