import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red'
  },
  counterContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    height: 50
  },
  counterButtons: {
    backgroundColor: 'black',
    width: '33%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  signs: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 35
  },
  number: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 35
  }
})

export default styles
