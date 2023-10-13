import React from 'react'
import { SafeAreaView, View, Image, Text, Pressable } from 'react-native'
import styles from '../Profile/Profile.style'
import { StatusBar } from 'expo-status-bar'
import { colors } from '../../constants/colors'
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons'
import * as ImagePicker from 'expo-image-picker'
import { useDispatch, useSelector } from 'react-redux'
import { setCameraImage } from '../../features/auth/authSlice'

const Profile = () => {
  const image = useSelector(state.auth.imageCamera)
  const dispatch = useDispatch()

  const verifyCameraPermissions = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync()
    return granted
  }

  const pickImage = async () => {
    const isCameraOk = await verifyCameraPermissions()

    if (isCameraOk) {
      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.4
      })

      if (!result.canceled) {
        setImage(`data:image/jpeg;base64,${result.assets[0].base64}`)
      }
    }
  }

  const confirmImage = () => {
    dispatch(setCameraImage(image))
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colors.secondary} />
      <View style={{ marginTop: 30, alignItems: 'center' }}>
        {image
          ? (
            <Image style={styles.avatar} source={{ uri: image }} />
            )
          : (
            <Image
              style={styles.avatar}
              source={{
                uri:
                'https://firebasestorage.googleapis.com/v0/b/forused-742ab.appspot.com/o/USER.webp?alt=media&token=bafeba2b-0855-4f56-bced-13acfdf2840b&_gl=1*1ayr8xd*_ga*MTQ2MjEzMjM4Ny4xNjc3MjUxMTI0*_ga_CW55HF8NVT*MTY5NzE2NTE5OS44NS4xLjE2OTcxNjUyOTAuNDYuMC4w'
              }}
            />
            )}
        <Pressable style={styles.takePhoto} onPress={pickImage}>
          <SimpleLineIcons style={styles.button} name='camera' size={25} color='white' />
        </Pressable>
        <Text style={styles.userName}>Username</Text>
        <Text style={styles.userMail}>useremail@example.com</Text>

        <Pressable style={styles.touchContainer}>
          <Text style={styles.button}>LOG OUT</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}

export default Profile
