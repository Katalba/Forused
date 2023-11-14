import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'

const styles = StyleSheet.create({
  container: {
    flex: 1

  },
  contentContainer: {
    flex: 1,
    padding: 20,
    alignItems: 'center'
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    paddingStart: 30,
    padding: 10,
    width: '90%',
    marginTop: 20,
    borderRadius: 30,
    fontSize: 15,
    backgroundColor: '#fff'
  },
  inputPicker: {
    borderWidth: 1,
    borderColor: 'gray',
    width: '90%',
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: '#fff'
  },
  touchContainer: {
    width: '30%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.button,
    borderRadius: 25,
    padding: 10,
    marginTop: 50
  },
  button: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 17
  },
  listTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10
  },
  invoiceList: {
    marginTop: 5
  },
  invoiceItem: {
    fontSize: 14,
    marginBottom: 5
  },
  avatarContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'

  },
  avatar: {
    width: 200,
    height: 300,
    resizeMode: 'contain'
  },
  addText: {
    textAlign: 'center'
  },
  invoiceItemImage: {
    width: 70,
    height: 100
  }

})

export default styles
