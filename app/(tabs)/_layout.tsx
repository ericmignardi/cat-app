import { Ionicons } from '@expo/vector-icons';
import { Tabs, useRouter } from 'expo-router';
import React from 'react';
import { Alert, TouchableOpacity } from 'react-native';

export default function TabsLayout() {

  const router = useRouter();

  return (
    <Tabs screenOptions={{ headerShown: true, tabBarActiveTintColor: 'tomato', tabBarInactiveTintColor: 'gray', tabBarShowLabel: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => <Ionicons name={focused ? "home" : "home-outline"} size={24} color={color} />,
          headerRight: () => (
            <Ionicons onPress={() => { Alert.alert("takePhoto button pressed") }} name="add" size={24} color="black" style={{ marginRight: 16 }} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => <Ionicons name={focused ? "person" : "person-outline"} size={24} color={color} />,
          headerRight: () => (
            <TouchableOpacity onPress={() => router.push('/settings')}>
              <Ionicons name="settings" size={24} color="black" style={{ marginRight: 16 }} />
            </TouchableOpacity>
          ),
        }}
      />
    </Tabs>
  );
}