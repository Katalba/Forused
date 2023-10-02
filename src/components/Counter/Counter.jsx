import { Pressable, Text, View } from 'react-native'
import { decrement, increment } from '../../features/counter/CounterSlice'
import { useDispatch, useSelector } from 'react-redux'
import styles from './Counter.style'

const Counter = () => {
  const counter = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
      <View style={styles.container}>
        <View style={styles.counterContainer}>
          <Pressable
            style={styles.counterButtons}
            onPress={() => dispatch(decrement())}
          >
            <Text style={styles.signs}>-</Text>
          </Pressable>
          <Text style={styles.number}>{counter}</Text>
          <Pressable
            onPress={() => dispatch(increment())}
            style={styles.counterButtons}
          >
            <Text style={styles.signs}>+</Text>
          </Pressable>
        </View>
      </View>
      <Pressable>
        <Text>add to cart</Text>
      </Pressable>
    </>
  )
}

export default Counter
