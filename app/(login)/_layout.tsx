// import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
// import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
// import { useEffect } from 'react';
import 'react-native-reanimated';



export default function LoginLayout() {
  
  return (
   
      <Stack>
        <Stack.Screen name="loginpage" options={{ headerShown: false }} />
        <Stack.Screen name="otp" options={{ headerShown: false }} />
        
      </Stack>
   
  );
}