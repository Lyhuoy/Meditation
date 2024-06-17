import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { useColorScheme } from '@/hooks/useColorScheme';
import TimerProvider from '@/context/TimerContext';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const [loaded] = useFonts({
    RobotoMono: require('../assets/fonts/RobotoMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <TimerProvider>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="meditate/[id]" options={{ headerShown: false }} />
          <Stack.Screen
            name="affirmations/[itemId]"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="(modal)/adjust-meditation-duration"
            options={{ headerShown: false, presentation: 'modal' }}
          />
        </Stack>
      </ThemeProvider>
    </TimerProvider>
  );
}
