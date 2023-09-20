import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  },
  listContainer: {
    paddingHorizontal: 30,
    flex: 1,
    marginTop: 15,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  cardContainer: {
    width: 250,
    height: 350
  },
  cardImage: {
    width: 250,
    height: 250,
    resizeMode: 'cover'
  },
  text: {
    color: '#000',
    fontSize: 22,
    fontFamily: 'texto'
  }

})

export default styles
