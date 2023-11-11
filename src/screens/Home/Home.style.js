import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  contentContainer: {
    flex: 1,
    padding: 16
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 0.5,
    marginBottom: 10,
    paddingLeft: 8,
    justifyContent: 'center'
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
    resizeMode: 'cover'
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
