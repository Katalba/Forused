import { Details, Home, Products } from '../screens'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName='Home'
      screenOptions={() => ({
        headerShown: false
      })}
    >
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Products' component={Products} />
      <Stack.Screen name='Details' component={Details} />
    </Stack.Navigator>
  )
}

export default StackNavigator
