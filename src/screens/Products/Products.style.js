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
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    marginBottom: 30
  },
  cardContainer: {
    width: '48%',
    height: 350,
    margin: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'transparent',
    backgroundColor: 'white',
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
    width: '100%',
    aspectRatio: 1,
    resizeMode: 'cover'

  },
  text: {
    color: '#000',
    fontSize: 17,
    fontFamily: 'subtitulo',
    letterSpacing: 1,
    margin: 15
  }

})

export default styles
