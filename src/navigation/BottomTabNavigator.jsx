import { StyleSheet, View } from 'react-native'

import CartNavigator from './CartNavigator'
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons'
import StackNavigator from './StackNavigator'
import { colors } from '../constants/colors'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ProfileNavigator from './ProfileNavigator'

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
        name='Profile'
        component={ProfileNavigator}
        options={{
          tabBarIcon: () => (
            <View style={styles.iconContainer}>
              <SimpleLineIcons style={styles.iconos} name='user' size={25} color='white' />
            </View>
          )
        }}
      />
      <BottomTab.Screen
        name='CartNav'
        component={StackNavigator}
        options={{
          tabBarIcon: () => (
            <View style={styles.iconContainer}>
              <SimpleLineIcons style={styles.iconos} name='plus' size={25} color='white' />
            </View>
          )
        }}
      />
      <BottomTab.Screen
        name='Shop'
        component={CartNavigator}
        options={{
          tabBarIcon: () => (
            <View style={styles.iconContainer}>
              <SimpleLineIcons style={styles.iconos} name='home' size={25} color='white' />
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

    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  }
})
