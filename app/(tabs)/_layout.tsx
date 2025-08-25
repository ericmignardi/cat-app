import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';
import { Alert } from 'react-native';

export default function TabsLayout() {
  return (
    // Replace onPress action with takePhoto function
    <Tabs screenOptions={{ headerShown: true, tabBarActiveTintColor: 'tomato', tabBarInactiveTintColor: 'gray', headerRight: () => <Ionicons onPress={() => {Alert.alert("takePhoto button pressed")}} name="add" size={24} color="black" style={{ marginRight: 16 }} /> }}>
        <Tabs.Screen name="index" options={{ title: 'Home', tabBarIcon: ({color, focused}) => <Ionicons name={focused ? "home" : "home-outline"} size={24} color={color} /> }} />
        <Tabs.Screen name="profile" options={{ title: 'Profile', tabBarIcon: ({color, focused}) => <Ionicons name={focused ? "person" : "person-outline"} size={24} color={color} /> }} />
        <Tabs.Screen name="settings" options={{ title: 'Settings', tabBarIcon: ({color, focused}) => <Ionicons name={focused ? "settings" : "settings-outline"} size={24} color={color} /> }} />
    </Tabs>
  )
}