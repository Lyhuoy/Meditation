import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import AppGradient from '@/components/AppGradient';
import AFFIRMATION_GALLERY from '@/constants/affirmation-gallery';
import GuideAffirmationsGallery from '@/components/GuideAffirmationsGallery';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Affirmations = () => {
  const paddingBottom = useSafeAreaInsets().bottom;
  return (
    <View style={{ flex: 1 }}>
      <AppGradient colors={['#2e1f5a', '#54426b', '#a790af']}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text
            style={{
              fontSize: 26,
              fontWeight: 'bold',
              color: 'white',
              marginTop: 20,
            }}
          >
            Change your beliefs withy affirmations
          </Text>
          <View
            style={{
              paddingBottom: paddingBottom,
            }}
          >
            {AFFIRMATION_GALLERY.map((item) => {
              return (
                <GuideAffirmationsGallery
                  key={item.title}
                  title={item.title}
                  preview={item.data}
                />
              );
            })}
          </View>
        </ScrollView>
      </AppGradient>
    </View>
  );
};

export default Affirmations;
