import React, { useState } from 'react'
import { SafeAreaView, View, Text, Button, TextInput, Image, Pressable } from 'react-native'
import { Header } from '../../components'
import { Picker } from '@react-native-picker/picker'
import styles from './Home.style'
import * as ImagePicker from 'expo-image-picker'
import { setCameraImage } from '../../features/bill/billSlice'
import { useDispatch, useSelector } from 'react-redux'

const Home = ({ navigation }) => {
  const image = useSelector(state => state.bill.imageCamera)
  const [invoice, setInvoice] = useState('')
  const [amount, setAmount] = useState('')
  const [category, setCategory] = useState('Gastos Fijos')
  const [invoices, setInvoices] = useState([])

  const dispatch = useDispatch()

  const handleAddInvoice = () => {
    if (invoice && amount && category) {
      const newInvoice = `${invoice} - $${amount} - ${category}`
      setInvoices([...invoices, newInvoice])
      setInvoice('')
      setAmount('')
      setCategory('Gastos Fijos')
    }
  }

  const verifyCameraPermissions = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync()
    if (!granted) {
      return false
    }
    return true
  }

  const pickImage = async () => {
    const isCameraOk = await verifyCameraPermissions()

    if (isCameraOk) {
      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [1, 1],
        base64: true,
        quality: 0.4
      })
      if (!result.canceled) {
        console.log(result.assets)
        dispatch(
          setCameraImage(`data:image/jpeg;base64,${result.assets[0].base64}`)
        )
      }
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header title='Cargar Facturas' />
      <View style={styles.contentContainer}>
        <TextInput
          style={styles.input}
          placeholder='Ingrese una factura'
          value={invoice}
          onChangeText={(text) => setInvoice(text)}
        />
        <TextInput
          style={styles.input}
          placeholder='Ingrese el monto'
          value={amount}
          onChangeText={(text) => setAmount(text)}
          keyboardType='numeric'
        />
        <Picker
          selectedValue={category}
          onValueChange={(itemValue) => setCategory(itemValue)}
        >
          <Picker.Item label='Gastos fijos' value='Gastos fijos' />
          <Picker.Item label='Gastos imprevistos' value='Gastos imprevistos' />
          <Picker.Item label='Gastos variables' value='Gastos variables' />
          <Picker.Item label='Gastos por deseo' value='Gastos por deseo' />
        </Picker>
        <Pressable style={styles.takePhoto} onPress={pickImage}>
          <View style={styles.avatarContainer}>
            {image
              ? (
                <Image style={styles.avatar} source={{ uri: image }} />
                )
              : (
                <Image
                  style={styles.avatar}
                  source={{
                    uri:
                'https://firebasestorage.googleapis.com/v0/b/forused-742ab.appspot.com/o/factura.jpg?alt=media&token=67725763-0e7c-4bd3-9687-518e8648b0ab&_gl=1*rb2ysw*_ga*MTQ2MjEzMjM4Ny4xNjc3MjUxMTI0*_ga_CW55HF8NVT*MTY5OTQwNTg5Ni4xMDYuMS4xNjk5NDA1OTQyLjE0LjAuMA..'
                  }}
                />
                )}
          </View>
          <Text style={styles.addText}>Adjunta tu factura si deseas</Text>
        </Pressable>
        <Button title='Agregar Factura' onPress={handleAddInvoice} />

        <Text style={styles.listTitle}>Listado de Facturas:</Text>
        <View style={styles.invoiceList}>
          {invoices.map((item, index) => (
            <View key={index} style={styles.invoiceItemContainer}>
              <Text style={styles.invoiceItemText}>{item}</Text>
            </View>
          ))}
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Home
