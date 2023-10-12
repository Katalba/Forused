import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
    alignItems: 'center',
    justifyContent: 'center'
  },
  titulo: {
    fontSize: 80,
    color: '#fff',
    fontWeight: 'bold'
  },
  subTitle: {
    fontSize: 30,
    color: '#fff',
    marginBottom: 30
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'gray',
    paddingStart: 30,
    padding: 10,
    width: '80%',
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: '#fff'
  },
  forgotPassword: {
    color: '#fff',
    fontSize: 14,
    marginTop: 20
  },
  touchContainer: {
    width: '30%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.button,
    borderRadius: 25,
    padding: 10,
    marginTop: 50
  },
  button: {
    color: '#fff',
    fontWeight: 'bold'
  },
  blurContainer: {

  }

})

export default styles
