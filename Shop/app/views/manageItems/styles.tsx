import {StyleSheet} from 'react-native';
import {colors} from '../../themes';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  title: {
    color: colors.green,
    fontSize: 30,
    fontWeight: '200',
    textAlign: 'center',
    width: '100%',
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  inputsContainer: {
    flex: 3,
  },
  textInput: {
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 20,
    height: 50,
    alignSelf: 'center',
    width: '80%',
    fontSize: 18,
    borderColor: colors.green,
    borderWidth: 1,
    borderRadius: 100,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: colors.green,
    height: '50%',
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  buttonText: {
    color: colors.white,
    fontSize: 20,
  },
});
