import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary
  },
  listContainer: {
    paddingHorizontal: 15,
    flex: 1,
    marginTop: 15
  },
  text: {
    color: '#fff',
    fontSize: 22,
    fontFamily: 'texto'
  }

})

export default styles
