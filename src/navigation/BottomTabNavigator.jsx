import { StyleSheet, View } from 'react-native'

import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons'
import StackNavigator from './StackNavigator'
import { colors } from '../constants/colors'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ProfileNavigator from './ProfileNavigator'
import BillNavigator from './BillNavigator'

const BottomTab = createBottomTabNavigator()

function BottomTabNavigator () {
  return (
    <BottomTab.Navigator
      initialRouteName='Home'
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
        name='Home'
        component={StackNavigator}
        options={{
          tabBarIcon: () => (
            <View style={styles.iconContainer}>
              <SimpleLineIcons style={styles.iconos} name='home' size={25} color='white' />
            </View>
          )
        }}
      />
      <BottomTab.Screen
        name='Billch'
        component={BillNavigator}
        options={{
          tabBarIcon: () => (
            <View style={styles.iconContainer}>
              <SimpleLineIcons style={styles.iconos} name='plus' size={25} color='white' />
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
