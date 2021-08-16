import {format} from 'date-fns';
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import ImageInListItem from '../imageInListItem';
import styles from './styles';

interface Props {
  title: string;
  description: string;
  date: number | Date;
  image?: string;
  onPress?: Function;
  index?: number;
}

const MainShopListItem = ({
  title,
  description,
  date,
  image,
  onPress = null,
  index,
}: Props) => {
  const onPressItem = (item, index) => {
    onPress(item, index);
  };
  return (
    <View style={styles.container}>
      <View style={styles.lineContainer}>
        <Text numberOfLines={1} style={styles.title}>
          {title}
        </Text>
        <View style={styles.mainContainer}>
          <ImageInListItem {...{image}} />
          <View style={styles.descriptionContainer}>
            <Text
              numberOfLines={onPress ? 1 : 2}
              style={styles.descriptionText}>
              {description}
            </Text>
            <Text numberOfLines={1} style={styles.descriptionText}>
              {date && format(new Date(date), 'dd.MM.yy HH:mm')}
            </Text>
            {onPress && (
              <TouchableOpacity
                onPress={() =>
                  onPressItem({title, description, image, date}, index)
                }>
                <Text style={styles.buttonText}>+ add to archive</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

export default MainShopListItem;
