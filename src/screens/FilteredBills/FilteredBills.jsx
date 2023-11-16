import React from 'react'
import { useSelector } from 'react-redux'
import { View, Text, FlatList, Image } from 'react-native'
import styles from './FilteredBills.style'

const FilteredBills = () => {
  const filteredBill = useSelector(state => state.bill.filteredBills)
  console.log(filteredBill)

  return (
    <View style={styles.container}>

      <FlatList
        data={filteredBill}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>Concepto: {item.concept}</Text>
            <Text>Amount: {item.amount}</Text>
            <Text>Category: {item.category}</Text>
            <Image>image: {item.image}</Image>
          </View>
        )}
      />
    </View>
  )
}

export default FilteredBills
