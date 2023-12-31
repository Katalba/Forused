import fonts from './src/global/fonts'
import { useFonts } from 'expo-font'
import { NavigationContainer } from '@react-navigation/native'
import MainNavigator from './src/navigation/MainNavigator'
import { Provider } from 'react-redux'
import store from './src/store'
import { init } from './src/db'

init()
  .then(() => console.log('DB initialized'))
  .catch(err => console.log('DB failed', err.message))

const App = () => {
  const [fontsLoaded] = useFonts(fonts)

  if (!fontsLoaded) {
    return null
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </Provider>
  )
}

export default App
