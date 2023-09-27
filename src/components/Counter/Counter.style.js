import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red'
  },
  counterContainer: {
    flexDirection: 'row',
    backgroundColor: 'green',
    justifyContent: 'space-between',
    height: 50
  },
  counterButtons: {
    backgroundColor: 'blue',
    width: '33%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  signs: {
    fontSize: 35
  },
  input: {
    backgroundColor: 'white',
    width: '80%',
    height: 30
  },
  inputContaienr: {
    flexDirection: 'row',
    marginVertical: 10,
    padding: 10
  }
})

export default styles
