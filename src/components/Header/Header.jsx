import { Text, View } from 'react-native'

import React from 'react'
import styles from './Header.style'
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons'

const Header = ({ title }) => {
  return (
    <View style={styles.container}>
      <SimpleLineIcons style={styles.iconos} name='menu' size={30} />
      <Text style={styles.text}>{title}</Text>
      <SimpleLineIcons style={styles.iconos} name='bag' size={30} />
    </View>
  )
}

export default Header
