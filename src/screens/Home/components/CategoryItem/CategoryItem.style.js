import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  contentCategories: {
    marginHorizontal: 16,
    marginVertical: 8,
    width: '40%'
  },
  container: {
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#fff',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    padding: 30
  },
  image: {
    width: '100%',
    height: 170,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
    resizeMode: 'contain'
  },
  text: {
    marginVertical: 10,
    fontSize: 16,
    fontWeight: 'bold'
  }
})

export default styles
