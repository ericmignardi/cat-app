import '@/global.css';
import { Ionicons } from '@expo/vector-icons';
import { Stack, useRouter } from "expo-router";
import { TouchableOpacity } from 'react-native';

export default function RootLayout() {
  
  const router = useRouter();
  
  return <Stack screenOptions={{ headerShown: false }}>
    <Stack.Screen name="(tabs)" />
    <Stack.Screen 
      name="settings" 
      options={{ 
        title: 'Settings', 
        headerShown: true,
        headerBackButtonDisplayMode: "minimal",
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => router.back()}
          >
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
        ),
      }} 
    />
  </Stack>;
}
