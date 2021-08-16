import {StyleSheet} from 'react-native';
import {colors} from '../../themes';

export default StyleSheet.create({
  container: {
    height: 100,
    backgroundColor: colors.white,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 50,
    marginBottom: 10,
    borderColor: colors.green,
    borderWidth: 2,
  },
  lineContainer: {
    height: '90%',
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    alignContent: 'center',
    borderColor: colors.green,
    borderRadius: 50,
  },
  title: {
    fontSize: 18,
    fontWeight: '300',
    textAlign: 'center',
    alignSelf: 'center',
    width: '90%',
    top: 5,
  },
  mainContainer: {
    height: '90%',
    width: '100%',
    flexDirection: 'row',
  },
  descriptionText: {
    fontWeight: '300',
  },
  descriptionContainer: {
    justifyContent: 'center',
    height: '75%',
    width: '80%',
    paddingLeft: 10,
  },
  buttonText: {
    color: colors.blue
  },
});
