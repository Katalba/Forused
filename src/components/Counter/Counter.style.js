import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    width: '50',
    height: '50'
  },
  counterContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    height: 20
  },
  counterButtons: {
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    height: 30
  },
  signs: {
    color: 'white',
    fontSize: 20
  },
  numberContainer: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  number: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 13
  }
})

export default styles
