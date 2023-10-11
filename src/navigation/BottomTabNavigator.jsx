import { StyleSheet, View, Text } from 'react-native'

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
          tabBarIcon: () => (
            <View style={styles.iconContainer}>
              <SimpleLineIcons style={styles.iconos} name='home' size={25} color='white' />
            </View>
          )
        }}
      />
      <BottomTab.Screen
        name='CartNav'
        component={CartNavigator}
        options={{
          tabBarIcon: () => (
            <View style={styles.iconContainer}>
              <SimpleLineIcons style={styles.iconos} name='bag' size={25} color='white' />
              <Text style={{ marginLeft: 5, fontWeight: '500', color: 'white' }}>1</Text>
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
