import { View, Pressable, Text } from 'react-native';
import React, { useContext } from 'react';
import AppGradient from '@/components/AppGradient';
import { router } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';
import CustomButton from '@/components/CustomButton';
import { TimerContext } from '@/context/TimerContext';

const AdjustMeditationDuration = () => {
  const { setDuration } = useContext(TimerContext);
  const handlePress = (duration: number) => {
    setDuration(duration);
    router.back();
  };

  return (
    <View
      style={{
        flex: 1,
        position: 'relative',
      }}
    >
      <AppGradient colors={['#161b2e', '#0a4d4a', '#766e67']}>
        <Pressable
          onPress={() => router.back()}
          style={{
            position: 'absolute',
            top: 20,
            left: 20,
          }}
        >
          <AntDesign name="leftcircleo" size={36} color="white" />
        </Pressable>
        <View
          style={{
            justifyContent: 'center',
            height: '80%',
          }}
        >
          <Text
            style={{
              color: 'white',
              fontSize: 28,
              textAlign: 'center',
              fontWeight: 'bold',
              marginBottom: 20,
            }}
          >
            Adjust your meditation duration
          </Text>
          <View>
            <CustomButton
              title="10 seconds"
              onPress={() => handlePress(10)}
              containerStyles={{ marginBottom: 10 }}
            />
            <CustomButton
              title="5 minutes"
              onPress={() => handlePress(5 * 60)}
              containerStyles={{ marginBottom: 10 }}
            />
            <CustomButton
              title="10 minutes"
              onPress={() => handlePress(10 * 60)}
              containerStyles={{ marginBottom: 10 }}
            />
            <CustomButton
              title="15 minutes"
              onPress={() => handlePress(15 * 60)}
              containerStyles={{ marginBottom: 10 }}
            />
            <CustomButton
              title="20 minutes"
              onPress={() => handlePress(20 * 60)}
              containerStyles={{ marginBottom: 10 }}
            />
          </View>
        </View>
      </AppGradient>
    </View>
  );
};

export default AdjustMeditationDuration;
