import { StyleSheet, View } from 'react-native'

import CartNavigator from './CartNavigator'
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons'
import StackNavigator from './StackNavigator'
import { colors } from '../constants/colors'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const BottomTab = createBottomTabNavigator()

function BottomTabNavigator () {
  return (
    <BottomTab.Navigator
      initialRouteName='Shop'
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar
      }}
    >
      <BottomTab.Screen
        name='Shop'
        component={StackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={focused ? styles.iconContainer : null}>
              <SimpleLineIcons style={styles.iconos} name='home' size={25} color='white' />
            </View>
          )
        }}
      />
      <BottomTab.Screen
        name='CartNav'
        component={CartNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={focused ? styles.iconContainer : null}>
              <SimpleLineIcons style={styles.iconos} name='bag' size={25} color='white' />
            </View>
          )
        }}
      />

    </BottomTab.Navigator>
  )
}

export default BottomTabNavigator

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.secondary,
    paddingTop: 5,
    height: 60
  },
  iconContainer: {
    backgroundColor: colors.button,
    borderRadius: 15,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
