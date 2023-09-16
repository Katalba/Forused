import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: 80,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 30,
    fontFamily: 'titulo'
  }

})

export default styles
