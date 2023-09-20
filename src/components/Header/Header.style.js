import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    height: 80,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  text: {
    fontSize: 32,
    fontFamily: 'subtitulo',
    color: 'white'
  },
  iconos: {
    color: 'white'
  }

})

export default styles
