import * as FileSystem from 'expo-file-system';
import * as ImagePicker from 'expo-image-picker';
import { useEffect, useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";

const IMAGES_DIR = FileSystem.documentDirectory + 'images/';

export default function HomeScreen() {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const loadImages = async () => {
      await FileSystem.makeDirectoryAsync(IMAGES_DIR, { intermediates: true }).catch(() => {});
      const files = await FileSystem.readDirectoryAsync(IMAGES_DIR);
      setImages(files.map(file => IMAGES_DIR + file));
    };
    loadImages();
  }, []);

  const takePhoto = async () => {
    const permission = await ImagePicker.requestCameraPermissionsAsync();
    if (!permission.granted) return;

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      const asset = result.assets[0];
      const filename = `${Date.now()}.jpg`;
      const dest = IMAGES_DIR + filename;
      await FileSystem.copyAsync({
        from: asset.uri,
        to: dest,
      });
      setImages(prev => [dest, ...prev]);
    }
  };

  return (
    <View className='flex flex-col justify-between items-center gap-6 text-center p-4'>
      <TouchableOpacity onPress={takePhoto}>
        <Text>Take Photo</Text>
      </TouchableOpacity>
      <FlatList
        className='w-full'
        numColumns={3}
        contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}
        data={images}
        keyExtractor={(uri) => uri}
        renderItem={({ item }) => (
          <Image source={{ uri: item }} style={{ width: 100, height: 100}} />
        )}
      />
    </View>
  );
}
