import { Image, Text, View, SafeAreaView, Pressable } from 'react-native'
import { Counter } from '../../components'
import React from 'react'
import styles from './Details.style'
import { useDispatch } from 'react-redux'
import { addItem } from '../../features/cart/cartSlice'

const Details = ({ route }) => {
  const { product } = route.params
  const dispatch = useDispatch()

  const handleAddToCart = () => {
    dispatch(addItem({ ...product }))
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerImage}>
        <Image style={styles.image} source={{ uri: product.image }} />
      </View>

      <Text style={styles.title}>{product.title}</Text>
      <View style={styles.containerText}>
        <Text style={styles.price}>{`$ ${product.price}`}</Text>
        <Counter />
      </View>
      <Pressable style={styles.button} onPress={handleAddToCart}>
        <Text style={styles.buttonText}>Add to cart</Text>
      </Pressable>
    </SafeAreaView>
  )
}

export default Details
