import { FlatList, SafeAreaView, View, Text } from 'react-native'

import { CategoryItem } from './components'
import { Header } from '../../components'
import React from 'react'
import styles from './Home.style'
import { useGetCategoriesQuery } from '../../services/shopApi'

const Home = ({ navigation }) => {
  const { data, isLoading, isError } = useGetCategoriesQuery()

  if (isLoading) {
    return (
      <SafeAreaView style={styles.container}>
        <Header title='Categories' />
        <View style={styles.listContainer}>
          <Text>Loading...</Text>
        </View>
      </SafeAreaView>
    )
  }

  if (isError) {
    return (
      <SafeAreaView style={styles.container}>
        <Header title='Categories' />
        <View style={styles.listContainer}>
          <Text>Error fetching data</Text>
        </View>
      </SafeAreaView>
    )
  }

  if (!data) {
    return (
      <SafeAreaView style={styles.container}>
        <Header title='Categories' />
        <View style={styles.listContainer}>
          <Text>No data available</Text>
        </View>
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header title='Categories' />
      <View style={styles.listContainer}>
        {!isLoading && (
          <FlatList
            data={data}
            keyExtractor={category => category.title}
            renderItem={({ item }) => (
              <CategoryItem category={item.title} navigation={navigation} image={item.image} />
            )}
          />
        )}
      </View>
    </SafeAreaView>
  )
}

export default Home
