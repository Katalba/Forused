import React from 'react'
import { Text } from 'react-native'
import styles from './Cart.styles'
import { useSelector } from 'react-redux'

const Cart = () => {
  const counter = useSelector(state => state.counter.value)

  return (
    <Text style={styles.text}>{counter}</Text>
  )
}

export default Cart
