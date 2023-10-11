import { FlatList, Text, TouchableOpacity, View, Image, SafeAreaView } from 'react-native'
import { Header, SearchInput } from '../../components'
import React, { useEffect, useState } from 'react'

import styles from './Products.style'
import { useSelector } from 'react-redux'
import { useGetProductsByCategoryQuery } from '../../services/shopApi'

const Products = ({ navigation }) => {
  const category = useSelector(state => state.shop.categorySelected)
  // const [setArrProducts] = useState([])
  const [setKeyword] = useState('') // añadir luego el keyword para el filtrado por búsqueda
  const { data, isLoading } = useGetProductsByCategoryQuery(category)

  useEffect(() => {
    console.log(data)
    // if (data) {
    //   const productsFiltered = data.filter(product =>
    //     product.title.includes(keyword)
    //   )
    //   setArrProducts(productsFiltered)
    // }
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <Header title={category} />
      <SearchInput onSearch={setKeyword} />
      <View style={styles.listContainer}>
        {!isLoading && (
          <FlatList
            data={Object.values(data)}
            numColumns={2}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => navigation.navigate('Details', { product: item })}
                style={styles.cardContainer}
              >
                <Image style={styles.cardImage} source={{ uri: item.image }} />
                <Text style={styles.text}>{item.title}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.id}
          />
        )}
      </View>
    </SafeAreaView>
  )
}

export default Products
