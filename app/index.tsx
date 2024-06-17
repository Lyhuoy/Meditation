import { View, Text, ImageBackground } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import CustomButton from '@/components/CustomButton';
import { useRouter } from 'expo-router';
import AppGradient from '@/components/AppGradient';

const App = () => {
  const router = useRouter();
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        style={{ flex: 1 }}
        resizeMode="cover"
        source={require('../assets/meditation-images/meditate-under-tree.webp')}
      >
        <AppGradient colors={['rgba(0,0,0,0.4)', 'rgba(0,0,0,0.8)']}>
          <View style={{ flex: 1 }}>
            <View
              style={{
                gap: 10,
                flex: 1,
              }}
            >
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: 'bold',
                  color: 'white',
                  textAlign: 'center',
                }}
              >
                Simple Meditation
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  color: 'white',
                  textAlign: 'center',
                  opacity: 0.6,
                }}
              >
                Simplifying Meditation for Everyone
              </Text>
            </View>
            <View>
              <CustomButton
                title="Start Meditation"
                onPress={() => router.push('/nature-meditate')}
              />
            </View>
            <StatusBar style="light" />
          </View>
        </AppGradient>
      </ImageBackground>
    </View>
  );
};

export default App;
