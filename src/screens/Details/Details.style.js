import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  containerImage: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30

  },
  image: {
    width: '100%',
    aspectRatio: 1,
    resizeMode: ('stretch')
  },
  containerText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15
  },
  title: {
    fontSize: 35,
    fontFamily: 'subtitulo',
    paddingHorizontal: 15,
    letterSpacing: 1
  },
  price: {
    fontSize: 25,
    fontFamily: 'titulo',
    marginVertical: 15,
    letterSpacing: 2
  },
  button: {
    width: '40%',
    alignSelf: 'center',
    backgroundColor: colors.button,
    padding: 15,
    borderRadius: 100,
    alignItems: 'center',
    position: 'absolute',
    bottom: 30

  },
  buttonText: {
    fontFamily: 'titulo',
    textTransform: 'uppercase',
    fontSize: 16
  }

})

export default styles
