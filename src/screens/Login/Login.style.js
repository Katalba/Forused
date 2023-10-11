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
    fontSize: 20,
    color: 'gray'
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
  }

})

export default styles
