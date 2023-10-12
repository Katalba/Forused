import React, { useState } from 'react'
import { View, Text, TextInput, Pressable } from 'react-native'
import styles from './Signup.style'
import { StatusBar } from 'expo-status-bar'
import { useSignUpMutation } from '../../services/authApi'
import { setUser } from '../../features/auth/authSlice'
import { useDispatch } from 'react-redux'
//

const Signup = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPass, setConfirmPass] = useState('')
  const [triggerSignUp, result] = useSignUpMutation()
  const dispatch = useDispatch()

  const onSubmit = () => {
    console.log(name, email, password, confirmPass)
    triggerSignUp({
      name,
      email,
      password
    })
    console.log(result)
    if (result.isSuccess) {
      dispatch(setUser(result))
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.subTitle}>Create account</Text>
      <TextInput
        style={styles.textInput}
        placeholder='Name'
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.textInput}
        placeholder='Email'
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.textInput}
        placeholder='Password'
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.textInput}
        placeholder='Confirm password'
        value={confirmPass}
        onChangeText={setConfirmPass}
        secureTextEntry
      />
      <Pressable style={styles.touchContainer} onPress={onSubmit}>
        <Text style={styles.button}>CREATE</Text>
      </Pressable>
      <StatusBar style='auto' />

    </View>
  )
}

export default Signup
