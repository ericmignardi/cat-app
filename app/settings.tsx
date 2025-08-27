import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Switch, Text, TouchableOpacity, View } from 'react-native';

export default function SettingsScreen() {

  const [notification, setNotification] = useState<boolean>(false);
  const [darkMode, setDarkMode] = useState<boolean>(false);

  return (
    // Container
    <View className='flex flex-col justify-between items-start gap-6 text-center p-4'>
      {/* Account */}
      <View className='flex flex-col w-full gap-2'>
        <Text className='text-2xl font-semibold'>Account</Text>
        <View className='flex flex-row justify-between items-center'>
          <Text className='text-base font-normal'>Delete Account</Text>
          <TouchableOpacity>
            <Ionicons name='arrow-forward' size={24} />
          </TouchableOpacity>
        </View>
      </View>
      {/* Notifications */}
      <View className='flex flex-col w-full gap-2'>
        <Text className='text-2xl font-semibold'>Notifications</Text>
        <View className='flex flex-row justify-between items-center'>
          <View>
            <Text className='text-base font-normal'>Daily Photo Reminder</Text>
            <Text className='text-sm text-gray-500'>Get notified to upload your daily photo</Text>
          </View>
          <Switch value={notification} onValueChange={setNotification} />
        </View>
      </View>
      {/* App Preferences */}
      <View className='flex flex-col w-full gap-2'>
        <Text className='text-2xl font-semibold'>App Preferences</Text>
        <View className='flex flex-row justify-between items-center'>
          <Text className='text-base font-normal'>Dark Mode</Text>
          <Switch value={darkMode} onValueChange={setDarkMode} />
        </View>
      </View>
    </View>
  )
}