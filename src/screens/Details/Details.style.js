import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  containerImage: {
    alignItems: 'center',
    justifyContent: 'center'

  },
  image: {
    height: '70%',
    width: '90%',
    resizeMode: ('stretch')
  },
  containerText: {
    padding: 30

  },
  title: {
    fontSize: 35,
    fontFamily: 'titulo'
  },
  price: {
    fontSize: 27,
    marginVertical: 15
  }
})

export default styles
