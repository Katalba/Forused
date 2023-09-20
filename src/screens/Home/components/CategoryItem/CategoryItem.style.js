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
    height: 250,
    width: '90%'
  },
  text: {
    fontSize: 30,
    fontFamily: 'titulo',
    color: '#000',
    top: '-60%',
    left: '50%'
  },
  image: {
    height: 300,
    resizeMode: 'stretch'
  }
})

export default styles
