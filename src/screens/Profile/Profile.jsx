import React from 'react'
import { SafeAreaView, View, Image, Text, Pressable } from 'react-native'
import styles from '../Profile/Profile.style'
import { StatusBar } from 'expo-status-bar'
import { colors } from '../../constants/colors'

const Profile = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar backgroundColor={colors.secondary} />
      <View>
        <Image style={styles.avatar} source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/forused-742ab.appspot.com/o/biblioteca-chica.jpg?alt=media&token=2eacb905-a49d-4332-8c45-6e717469a35d&_gl=1*1g12uld*_ga*MTQ2MjEzMjM4Ny4xNjc3MjUxMTI0*_ga_CW55HF8NVT*MTY5NzEyNzEzNy44My4xLjE2OTcxMjcxNDkuNDguMC4w' }} />
        <Text style={styles.userName} />
        <Text style={styles.userMail} />

        <Pressable style={styles.touchContainer}>
          <Text style={styles.button}>CREATE</Text>
        </Pressable>
      </View>

    </SafeAreaView>
  )
}

export default Profile
