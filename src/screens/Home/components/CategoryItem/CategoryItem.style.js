import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  contentCategories: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    backgroundColor: '#FFFFFF',
    marginVertical: 15,
    borderRadius: 20,
    overflow: 'hidden',
    height: 150,
    width: '98%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 20,
    fontFamily: 'subtitulo',
    color: '#fff',
    position: 'absolute',
    zIndex: 10,
    letterSpacing: 3,
    textTransform: 'uppercase'
  },
  image: {
    height: 250,
    resizeMode: 'stretch',
    shadowColor: 'white',
    position: 'absolute',
    zIndex: 1
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(52, 52, 52, 0.8)'
  }
})

export default styles
