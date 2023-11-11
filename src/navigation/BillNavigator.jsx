import { Bill } from '../screens'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const BillNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName='Home'
      screenOptions={() => ({
        headerShown: false
      })}
    >
      <Stack.Screen name='Billch' component={Bill} />
    </Stack.Navigator>
  )
}

export default BillNavigator
