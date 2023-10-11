import React from 'react'
import { View, Image, Text } from 'react-native'
import styles from './CartListItem.styles'
import Counter from '../Counter/Counter'
import { useSelector } from 'react-redux'

const CartListItem = ({ item }) => {
  const counter = useSelector(state => state.counter.value)

  return (
    <View style={styles.container}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.contentContainer}>
        <Text style={styles.name}>{item.title}</Text>
        <View style={styles.footer}>
          <Counter style={styles.counter}>{counter}</Counter>
          <Text style={styles.itemTotal}>320</Text>
        </View>
      </View>
    </View>
  )
}

export default CartListItem
