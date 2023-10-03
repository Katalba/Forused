import { Image, Text, View, SafeAreaView } from 'react-native'
import { Counter } from '../../components'
import React from 'react'
import styles from './Details.style'

const Details = ({ route }) => {
  const { product } = route.params

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
    </SafeAreaView>
  )
}

export default Details
