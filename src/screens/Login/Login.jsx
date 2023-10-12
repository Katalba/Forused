import React from 'react'
import { View, Text, TextInput, Pressable } from 'react-native'
import styles from './Login.style'
import { StatusBar } from 'expo-status-bar'
// import { BlurView } from 'expo-blur'

// const uri = 'https://firebasestorage.googleapis.com/v0/b/forused-742ab.appspot.com/o/forused%20logo.mp4?alt=media&token=2675bc0f-5218-4e56-8609-c2eb65cec126&_gl=1*ix0gvz*_ga*MTQ2MjEzMjM4Ny4xNjc3MjUxMTI0*_ga_CW55HF8NVT*MTY5NzA3OTExOC43OC4xLjE2OTcwNzkyNDUuNjAuMC4w'

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
        <Text style={styles.button}>SIGN IN</Text>
      </Pressable>
      <Pressable>
        <Text style={styles.forgotPassword}>Don't have an account? Create</Text>
      </Pressable>
      <StatusBar style='auto' />

    </View>
  )
}

export default Login
