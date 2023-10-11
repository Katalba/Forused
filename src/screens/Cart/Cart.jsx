import React from 'react'
import { FlatList, View, Text, Pressable } from 'react-native'
import { CartListItem } from '../../components'
import styles from './Cart.styles'
import { useSelector } from 'react-redux'
import { usePostOrderMutation } from '../../services/shopApi'

const ShoppingCartTotal = ({ total }) => (
  <View style={styles.totalContainer}>
    <View style={styles.row}>
      <Text style={styles.text}>Subtotal:</Text>
      <Text style={styles.text}>410,00 US$</Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.text}>Delivery:</Text>
      <Text style={styles.text}>10,00 US$</Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.textBold}>Total:</Text>
      <Text style={styles.textBold}>{total.toFixed(2)} US$</Text>
    </View>
  </View>
)

const Cart = () => {
  const cart = useSelector(state => state.cart.items)
  const total = useSelector(state => state.cart.total)
  const [triggerPost, result] = usePostOrderMutation()

  const checkout = () => {
    triggerPost({ total, cart, user: 'user' })
  }
  return (
    <>
      <FlatList
        data={cart}
        renderItem={({ item }) => <CartListItem item={item} />}
        ListFooterComponent={<ShoppingCartTotal total={total} />}
      />
      <Pressable style={styles.button} onPress={checkout}>
        <Text style={styles.buttonText}>Checkout</Text>
      </Pressable>
      {result.isLoading && <Text>Loading...</Text>}
      {result.isError && <Text>Error: {result.error.message}</Text>}
      {result.isSuccess && <Text>Order placed successfully!</Text>}
    </>
  )
}

export default Cart
