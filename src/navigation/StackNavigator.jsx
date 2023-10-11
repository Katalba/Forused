import { Cart, Details, Home, Products } from '../screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { colors } from '../constants/colors'
// import { Pressable } from 'react-native'
// import SimpleLineIcons from ''

const Stack = createNativeStackNavigator()

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName='Home'
      screenOptions={() => ({
        headerShown: true
      })}
    >
      <Stack.Screen
        name='Home'
        component={Home}
        options={{
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 20
          },
          headerTintColor: colors.button
        }}
      />
      <Stack.Screen
        name='Products'
        component={Products}
        options={{
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 20
          },
          headerTintColor: colors.button
        }}
      />
      <Stack.Screen
        name='Details'
        component={Details}
        options={{
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 20
          },
          headerTintColor: colors.button
        }}
      />
      <Stack.Screen
        name='Shopping Bag'
        component={Cart}
        options={{
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 20
          },
          headerTintColor: colors.button
        }}
      />
    </Stack.Navigator>
  )
}

export default StackNavigator
