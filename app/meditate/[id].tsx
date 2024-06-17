import { View, Text, ImageBackground, Pressable } from 'react-native';
import React, { useContext, useEffect } from 'react';
import AppGradient from '@/components/AppGradient';
import { router, useLocalSearchParams } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';
import CustomButton from '@/components/CustomButton';
import { Audio } from 'expo-av';

import MEDITATE_Image from '@/constants/meditation-images';
import { MEDITATION_DATA, AUDIO_FILES } from '@/constants/meditationData';
import { TimerContext } from '@/context/TimerContext';

const Meditate = () => {
  const { id } = useLocalSearchParams();
  const { duration: secondRemaining, setDuration: setSecondRemaining } =
    useContext(TimerContext);
  const [isMeditating, setIsMeditating] = React.useState(false);
  const [audioSound, setAudioSound] = React.useState<Audio.Sound>();
  const [isPlayingAudio, setIsPlayingAudio] = React.useState(false);

  useEffect(() => {
    let timerId: NodeJS.Timeout;
    if (secondRemaining === 0) {
      if (isPlayingAudio) audioSound?.pauseAsync();
      setIsMeditating(false);
      setIsPlayingAudio(false);
      return;
    }
    if (isMeditating) {
      timerId = setInterval(() => {
        setSecondRemaining((prev) => prev - 1);
      }, 1000);
    }
    return () => {
      clearTimeout(timerId);
    };
  }, [secondRemaining, isMeditating]);

  useEffect(() => {
    return () => {
      setSecondRemaining(10);
      audioSound?.unloadAsync();
    };
  }, [audioSound]);

  const toggleMeditationSessionStatus = async () => {
    if (secondRemaining === 0) setSecondRemaining(10);
    setIsMeditating((prev) => !prev);
    await toggleSound();
  };

  const toggleSound = async () => {
    const sound = audioSound ? audioSound : await initializeAudio();
    const status = await sound?.getStatusAsync();

    if (status?.isLoaded && !isPlayingAudio) {
      await sound.playAsync();
      setIsPlayingAudio(true);
    } else {
      await sound.pauseAsync();
      setIsPlayingAudio(false);
    }
  };

  const initializeAudio = async () => {
    const audioFileName = MEDITATION_DATA[Number(id) - 1].audio;
    const { sound } = await Audio.Sound.createAsync(AUDIO_FILES[audioFileName]);

    setAudioSound(sound);
    return sound;
  };

  const handleAdjustDuration = () => {
    if (isMeditating) toggleMeditationSessionStatus();

    router.push('/(modal)/adjust-meditation-duration');
  };

  const formattedTime = String(Math.floor(secondRemaining / 60)).padStart(
    2,
    '0'
  );
  const formattedSecond = String(secondRemaining % 60).padStart(2, '0');

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={MEDITATE_Image[Number(id) - 1]}
        resizeMode="cover"
        style={{ flex: 1 }}
      >
        <AppGradient colors={['transparent', 'rgba(0, 0, 0, 0.8)']}>
          <Pressable
            onPress={() => router.back()}
            style={{
              position: 'absolute',
              top: 50,
              left: 20,
              zIndex: 20,
            }}
          >
            <AntDesign name="leftcircleo" size={36} color="white" />
          </Pressable>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <View
              style={{
                marginHorizontal: 'auto',
                width: 180,
                height: 180,
                borderRadius: 100,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white',
              }}
            >
              <Text
                style={{
                  fontSize: 36,
                  color: 'blue',
                  opacity: 0.7,
                }}
              >
                {formattedTime}:{formattedSecond}
              </Text>
            </View>
          </View>
          <View
            style={{
              marginBottom: 30,
              gap: 15,
            }}
          >
            <CustomButton
              title="Adjust duration"
              onPress={handleAdjustDuration}
            />
            <CustomButton
              title={isMeditating ? 'Pause' : 'Start'}
              onPress={toggleMeditationSessionStatus}
            />
          </View>
        </AppGradient>
      </ImageBackground>
    </View>
  );
};

export default Meditate;
