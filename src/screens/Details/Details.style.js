import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  containerImage: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10

  },
  image: {
    width: '100%',
    aspectRatio: 1,
    resizeMode: ('stretch')
  },
  containerText: {
    marginVertical: 10,
    paddingHorizontal: 10

  },
  title: {
    fontSize: 35,
    fontFamily: 'titulo',
    paddingHorizontal: 10
  },
  price: {
    fontSize: 27,
    marginVertical: 15
  }
})

export default styles
