import {
  View,
  Text,
  ImageBackground,
  Pressable,
  ScrollView,
} from 'react-native';
import React, { useEffect } from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { GalleryPreviewData } from '@/constants/models/AffirmationCategory';
import AFFIRMATION_GALLERY from '@/constants/affirmation-gallery';
import AppGradient from '@/components/AppGradient';
import { AntDesign } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';

const AffirmationPractice = () => {
  const { itemId } = useLocalSearchParams();
  const [affirmation, setAffirmation] = React.useState<GalleryPreviewData>();
  const [sentences, setSentences] = React.useState<string[]>([]);
  const router = useRouter();

  useEffect(() => {
    const affirmationData = AFFIRMATION_GALLERY.flatMap(
      (item) => item.data
    ).find((item) => item.id === Number(itemId));

    if (affirmationData) {
      setAffirmation(affirmationData);
      const affirmationArray = affirmationData.text.split('.');
      if (affirmationArray[affirmationArray.length - 1] === '') {
        affirmationArray.pop();
      }
      setSentences(affirmationArray);
    }
  }, []);

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <ImageBackground
        source={affirmation?.image}
        resizeMode="cover"
        style={{
          flex: 1,
        }}
      >
        <BlurView intensity={10} style={{ flex: 1 }}>
          <AppGradient colors={['rgba(0,0,0,0.3)', 'rgba(0,0,0,0.9)']}>
            <Pressable
              onPress={() => {
                router.back();
              }}
              style={{
                position: 'absolute',
                top: 50,
                left: 20,
              }}
            >
              <AntDesign name="leftcircleo" size={36} color="white" />
            </Pressable>
            <ScrollView
              style={{ marginTop: 40 }}
              showsVerticalScrollIndicator={false}
            >
              <View style={{ height: '100%', justifyContent: 'center' }}>
                <View style={{ height: '85%', justifyContent: 'center' }}>
                  {sentences.map((sentence, index) => (
                    <Text
                      key={index}
                      style={{
                        color: 'white',
                        fontSize: 30,
                        lineHeight: 40,
                        marginBottom: 36,
                        textAlign: 'center',

                        fontWeight: 'bold',
                      }}
                    >
                      {sentence}.
                    </Text>
                  ))}
                </View>
              </View>
            </ScrollView>
          </AppGradient>
        </BlurView>
      </ImageBackground>
    </View>
  );
};

export default AffirmationPractice;
