import React from 'react'
import { View, Text, TextInput, Button, Pressable } from 'react-native'
import styles from './Login.style'
import { StatusBar } from 'expo-status-bar'

const Login = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Hello</Text>
      <Text style={styles.subTitle}>Sign In to your account</Text>
      <TextInput
        style={styles.textInput}
        placeholder='katalbakush@email.com'
      />
      <TextInput
        style={styles.textInput}
        placeholder='password'
        secureTextEntry
      />
      <Text style={styles.forgotPassword}>Forgot your password?</Text>
      <Pressable style={styles.touchContainer}>
        <Button style={styles.button} />
      </Pressable>
      <StatusBar style='auto' />

    </View>
  )
}

export default Login
