import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  totalContainer: {
    margin: 20,
    padding: 10,
    borderColor: 'gainsboro',
    borderTopWidth: 1
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 2
  },
  text: {
    color: 'gray',
    fontSize: 16
  },
  textBold: {
    fontSize: 16,
    fontWeight: '500'
  },
  button: {
    backgroundColor: 'black',
    bottom: 10,
    width: '90%',
    alignSelf: 'center',
    padding: 15,
    borderRadius: 100,
    alignItems: 'center'
  },
  buttonText: {
    color: 'white',
    fontFamily: 'titulo',
    fontSize: 16
  }
})

export default styles
