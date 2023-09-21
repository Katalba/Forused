import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    width: '100%'
  },
  listContainer: {
    paddingHorizontal: 30,
    flex: 1,
    marginTop: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: 5,
    width: '100%'
  },
  cardContainer: {
    width: '45%',
    height: 350,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'transparent',
    backgroundColor: 'white',
    margin: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5
  },
  cardImage: {
    width: 250,
    height: 250,
    resizeMode: 'cover'
  },
  text: {
    color: '#000',
    fontSize: 24,
    fontFamily: 'subtitulo'
  }

})

export default styles
