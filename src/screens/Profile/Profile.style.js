import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  touchContainer: {
    width: '40%',
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
    fontWeight: 'bold'
  },
  avatarContainer: {
    alignItems: 'center'
  },
  avatar: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 1
  },
  takePhoto: {
    position: 'absolute',
    right: 10,
    top: 10,
    backgroundColor: colors.button,
    borderRadius: 25,
    padding: 10
  },
  userName: {
    marginTop: 20,
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: 20
  },
  userMail: {
  }
})

export default styles
