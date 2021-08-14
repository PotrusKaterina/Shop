import {StyleSheet} from 'react-native';
import {colors} from '../../themes';

export default StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.white},
  greenContainer: {
    height: '30%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    alignContent: 'flex-end',
  },
  raundView: {
    height: 50,
    backgroundColor: colors.green,
    width: '100%',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  listContainer: {
    flex: 1,
    backgroundColor: colors.green,
    width: '100%',
  },
  title: {
    top: 20,
    color: colors.green,
    fontSize: 30,
    fontWeight: '200',
    textAlign: 'center',
    width: '100%',
  },
  iconContainer: {
    height: '75%',
    width: '100%',
    top: 20,
  },
});
