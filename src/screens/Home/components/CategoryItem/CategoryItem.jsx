import { Pressable, Text, Image, View } from 'react-native'

import styles from './CategoryItem.style'
import { useDispatch } from 'react-redux'
import { filterBillsByCategory } from '../../../../features/bill/billSlice'

const CategoryItem = ({ category, navigation, image }) => {
  const dispatch = useDispatch()

  const filterBills = () => {
    dispatch(filterBillsByCategory(category))
    navigation.navigate('Bill', { category })
  }

  return (
    <View style={styles.contentCategories}>
      <Pressable
        onPress={filterBills}
        style={styles.container}
      >
        <Image source={{ uri: image }} style={styles.image} />
        <Text style={styles.text}>{category}</Text>
      </Pressable>
    </View>
  )
}

export default CategoryItem
