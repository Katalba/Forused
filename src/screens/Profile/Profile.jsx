import * as ImagePicker from 'expo-image-picker'

import { Image, Pressable, Text, View, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setCameraImage } from '../../features/auth/authSlice'
import styles from '../Profile/Profile.style'
import { colors } from '../../constants/colors'
import { usePostProfileImageMutation } from '../../services/shopApi'
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons'

const Profile = () => {
  const image = useSelector(state => state.auth.imageCamera)
  const { localId } = useSelector(state => state.auth)
  const [triggerSaveProfileImage, result] = usePostProfileImageMutation()
  const dispatch = useDispatch()

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

  const confirmImage = () => {
    triggerSaveProfileImage({ image, localId })
    console.log(result)
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
        <Pressable style={styles.confirm} onPress={confirmImage}>
          <Text>Confirm</Text>
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
