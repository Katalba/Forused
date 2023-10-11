import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingHorizontal: 10,
    flexDirection: 'row'
  },
  contentContainer: {
    flex: 1,
    marginLeft: 10
  },
  image: {
    width: '40%',
    aspectRatio: 1
  },
  name: {
    fontFamily: 'subtitulo',
    letterSpacing: 1,
    fontSize: 18
  },
  footer: {
    marginTop: 'auto',
    flexDirection: 'row',
    alignItems: 'center'
  },
  itemTotal: {
    fontSize: 16,
    marginLeft: 'auto',
    fontFamily: 'titulo'
  }
})

export default styles
