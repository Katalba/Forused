import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
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
  }

})

export default styles
