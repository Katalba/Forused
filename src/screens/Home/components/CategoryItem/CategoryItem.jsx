import { useDispatch } from 'react-redux'
import { filterBillsByCategory } from '../../../../features/bill/billSlice'

import { Pressable, Text, Image, View } from 'react-native'
import styles from './CategoryItem.style'

const CategoryItem = ({ navigation, image, category }) => {
  const dispatch = useDispatch()

  const handleFilterBills = () => {
    dispatch(filterBillsByCategory({ category }))
    navigation.navigate('Bill', { category })
  }

  return (
    <View style={styles.contentCategories}>
      <Pressable onPress={handleFilterBills} style={styles.container}>
        <Image source={{ uri: image }} style={styles.image} />
        <Text style={styles.text}>{category}</Text>
      </Pressable>
    </View>
  )
}

export default CategoryItem
