import { Login, Signup } from '../screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { colors } from '../constants/colors'

const AuthStack = createNativeStackNavigator()

const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator
      initialRouteName='Login'
      screenOptions={() => ({
        headerShown: true
      })}
    >
      <AuthStack.Screen
        name='Login'
        component={Login}
        options={{
          headerTitle: '',
          headerStyle: {
            backgroundColor: colors.secondary
          }
        }}
      />
      <AuthStack.Screen
        name='Signup'
        component={Signup}
        options={{
          headerTitle: '',
          headerStyle: {
            backgroundColor: colors.secondary
          },
          headerTintColor: '#fff'
        }}
      />

    </AuthStack.Navigator>
  )
}

export default AuthStackNavigator
