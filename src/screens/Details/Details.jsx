import { Image, Text, View } from 'react-native'

import { Header } from '../../components'
import React from 'react'
import styles from './Details.style'

const Details = ({ route }) => {
  const { product } = route.params
  return (
    <View style={styles.container}>
      <Header title='Detail Product' />
      <View style={styles.containerImage}>
        <Image style={styles.image} source={{ uri: product.image }} />
      </View>
      <View style={styles.containerText}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>{`$ ${product.price}`}</Text>
      </View>
    </View>
  )
}

export default Details
