import { Pressable, Text, Image, View } from 'react-native'

import styles from './CategoryItem.style'

const CategoryItem = ({ category, navigation, image }) => {
  return (
    <View style={styles.contentCategories}>
      <Pressable
        onPress={() => navigation.navigate('Products', { category })}
        style={styles.container}
      >
        <Image source={{ uri: image }} style={styles.image} />
        <Text style={styles.text}>{category}</Text>
      </Pressable>
    </View>
  )
}

export default CategoryItem
