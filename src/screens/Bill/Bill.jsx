import React, { useState } from 'react'
import { SafeAreaView, View, Text, TextInput, Image, Pressable } from 'react-native'
import { Header } from '../../components'
import { Picker } from '@react-native-picker/picker'
import styles from './bill.style'
import * as ImagePicker from 'expo-image-picker'
import { setCameraImage } from '../../features/bill/billSlice'
import { useDispatch, useSelector } from 'react-redux'
import { usePostBillMutation } from '../../services/billApi'
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons'

const Bill = ({ navigation }) => {
  const image = useSelector(state => state.bill.imageCamera)
  const [invoice, setInvoice] = useState('')
  const [amount, setAmount] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Gastos Fijos')
  const [invoices, setInvoices] = useState([])
  const [showDefaultImage, setShowDefaultImage] = useState(true)
  const [triggerPost] = usePostBillMutation()

  const dispatch = useDispatch()

  const handleAddInvoice = () => {
    if (invoice && amount && selectedCategory) {
      const newInvoice = {
        concept: invoice,
        amount,
        category: selectedCategory,
        image: image || null
      }
      setInvoices([...invoices, newInvoice])
      setInvoice('')
      setAmount('')
      setSelectedCategory('Gastos Fijos')
      setShowDefaultImage(true)
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
        setShowDefaultImage(false)
      }
    }
  }

  const resetImage = () => {
    setShowDefaultImage(true)
  }

  const billPost = () => {
    triggerPost({ invoices })
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header title='Carga de gastos' />
      <View style={styles.contentContainer}>
        <TextInput
          style={styles.input}
          placeholder='Concepto'
          value={invoice}
          onChangeText={(text) => setInvoice(text)}
        />
        <TextInput
          style={styles.input}
          placeholder='Monto'
          value={amount}
          onChangeText={(text) => setAmount(text)}
          keyboardType='numeric'
        />
        <View style={styles.inputPicker}>
          <Picker
            selectedValue={selectedCategory}
            onValueChange={(itemValue) => setSelectedCategory(itemValue)}
            style={{ fontSize: 15 }}
          >
            <Picker.Item label='Gastos fijos' value='Gastos fijos' />
            <Picker.Item label='Gastos imprevistos' value='Gastos imprevistos' />
            <Picker.Item label='Gastos variables' value='Gastos variables' />
            <Picker.Item label='Gastos por deseo' value='Gastos por deseo' />
          </Picker>

        </View>
        <Pressable style={styles.takePhoto} onPress={pickImage}>
          <View style={styles.avatarContainer}>
            {showDefaultImage
              ? (
                <Image
                  style={styles.avatar}
                  source={{
                    uri:
                    'https://firebasestorage.googleapis.com/v0/b/forused-742ab.appspot.com/o/ticket.png?alt=media&token=2a3ff48b-704c-456e-9b3a-fbb918995942'
                  }}
                />
                )
              : (
                <Image style={styles.avatar} source={{ uri: image }} />
                )}
          </View>
          <Text style={styles.addText}><SimpleLineIcons style={styles.iconos} name='paper-clip' size={18} color='black' /> Adjunta tu ticket</Text>
        </Pressable>

        <Pressable style={styles.touchContainer} onPress={() => { handleAddInvoice(); resetImage(); billPost() }}>
          <Text style={styles.button}>Agregar</Text>
        </Pressable>

        <Text style={styles.listTitle}>Listado de Facturas:</Text>
        <View style={styles.invoiceList}>
          {invoices.map((item, index) => (
            <View key={index} style={styles.invoiceItemContainer}>
              <Text style={styles.invoiceItemText}>Concepto: {item.concept}</Text>
              <Text style={styles.invoiceItemText}>Monto: ${item.amount}</Text>
              <Text style={styles.invoiceItemText}>Categoría: {item.category}</Text>
              {item.image && <Image style={styles.invoiceItemImage} source={{ uri: item.image }} />}
            </View>
          ))}

        </View>
      </View>
    </SafeAreaView>
  )
}

export default Bill
