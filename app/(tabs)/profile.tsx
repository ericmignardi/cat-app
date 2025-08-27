import React from 'react'
import { Image, Text, View } from 'react-native'

export default function ProfileScreen() {
  return (
    // Container
    <View className='flex flex-col justify-between items-center gap-6 text-center p-4'>
      {/* Profile Picture */}
      <Image source={require('../../assets/images/profilePic.png')} className='w-32 h-32 rounded-full' />
      {/* Profile Information */}
      <View className='flex flex-col justify-center items-center'>
        <Text className='text-2xl font-semibold'>Ethan</Text>
        <Text className='text-base text-gray-500'>Joined 2024</Text>
      </View>
      {/* Animal Information */}
      <Text className='text-base font-normal'>Whiskers, Siamese</Text>
      {/* Profile Statistics */}
      <View className='border border-gray-300 rounded-2xl w-full flex flex-col justify-center items-center gap-2 p-4'>
        <Text className='text-2xl font-semibold'>100</Text>
        <Text className='text-sm text-gray-500'>Posts</Text>
      </View>
    </View>
  )
}