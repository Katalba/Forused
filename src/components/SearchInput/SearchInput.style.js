import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    padding: 10
  },
  input: {
    color: 'black',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    borderWidth: 1,
    borderColor: colors.secondary,
    width: '80%',
    fontSize: 22,
    fontFamily: 'texto'
  }

})

export default styles
