import { Pressable, Text, Image, View } from 'react-native'

import styles from './CategoryItem.style'
import { useDispatch } from 'react-redux'
import { setCategorySelected } from '../../../../features/shop/ShopSlice'

const CategoryItem = ({ category, navigation, image }) => {
  const dispatch = useDispatch()
  return (
    <View style={styles.contentCategories}>
      <Pressable
        onPress={() => {
          dispatch(setCategorySelected(category))
          navigation.navigate('Products', { category })
        }}
        style={styles.container}
      >
        <Image source={{ uri: image }} style={styles.image} />
        <Text style={styles.text}>{category}</Text>
      </Pressable>
    </View>
  )
}

export default CategoryItem
