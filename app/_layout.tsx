import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import {Colors} from '../constants/Colors';

export default function RootLayout() {
  return (
    <>
      <Stack screenOptions={{ headerStyle: { backgroundColor: Colors.background,} ,headerTintColor: Colors.textPrimary,}} >
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="trip/[id]" options={{ title: 'Trip Details',}} />
      <Stack.Screen name="add-trip" options={{ title: 'Add Trip', presentation: 'modal', }} />
      </Stack>
      <StatusBar style="light"/>
    </>
  );
}
