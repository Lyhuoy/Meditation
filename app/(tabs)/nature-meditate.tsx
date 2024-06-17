import { View, Text, FlatList, Pressable, ImageBackground } from 'react-native';
import React from 'react';
import AppGradient from '@/components/AppGradient';
import { MEDITATION_DATA } from '@/constants/meditationData';
import meditationImages from '@/constants/meditation-images';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { router } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const NatureMaditate = () => {
  const paddingBottom = useSafeAreaInsets().bottom + 60;
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="light" />
      <AppGradient colors={['#161b2e', '#0a4d4b', '#776e67']}>
        <View style={{ gap: 5 }}>
          <Text
            style={{
              color: 'white',
              opacity: 0.8,
              fontSize: 28,
              fontWeight: 'bold',
            }}
          >
            Welcome Dude
          </Text>
          <Text
            style={{
              color: 'white',
              fontSize: 14,
            }}
          >
            Start your practice today
          </Text>
        </View>
        <View>
          <FlatList
            style={{ marginVertical: 10 }}
            data={MEDITATION_DATA}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <Pressable
                onPress={() => {
                  router.push(`/meditate/${item.id}`);
                }}
                style={{
                  height: 180,
                  borderRadius: 16,
                  overflow: 'hidden',
                  marginVertical: 10,
                  marginBottom:
                    index === MEDITATION_DATA.length - 1 ? paddingBottom : 10,
                }}
              >
                <ImageBackground
                  source={meditationImages[item.id - 1]}
                  resizeMode="cover"
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                  }}
                >
                  <LinearGradient
                    colors={['transparent', 'rgba(0,0,0,0.8)']}
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 24,
                        fontWeight: 'bold',
                        textShadowRadius: 10,
                        textAlign: 'center',
                      }}
                    >
                      {item.title}
                    </Text>
                  </LinearGradient>
                </ImageBackground>
              </Pressable>
            )}
          />
        </View>
      </AppGradient>
    </View>
  );
};

export default NatureMaditate;
