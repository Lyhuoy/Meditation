import { View, Text, FlatList, Pressable, Image } from 'react-native';
import React from 'react';
import { GalleryPreviewData } from '@/constants/models/AffirmationCategory';
import { Link } from 'expo-router';

interface GuideAffirmationsGalleryProps {
  title: string;
  preview: GalleryPreviewData[];
}

const GuideAffirmationsGallery = ({
  title,
  preview,
}: GuideAffirmationsGalleryProps) => {
  return (
    <View
      style={{
        marginVertical: 20,
      }}
    >
      <View style={{ marginBottom: 10 }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: 'white',
          }}
        >
          {title}
        </Text>
      </View>
      <View>
        <FlatList
          data={preview}
          showsHorizontalScrollIndicator={false}
          key={title}
          horizontal
          renderItem={({ item }) => (
            <Link href={`/affirmations/${item.id}`} asChild>
              <Pressable>
                <View
                  style={{
                    height: 140,
                    width: 110,
                    borderRadius: 12,
                    marginRight: 10,
                  }}
                >
                  <Image
                    source={item.image}
                    resizeMode="cover"
                    style={{ width: '100%', height: '100%', borderRadius: 8 }}
                  />
                </View>
              </Pressable>
            </Link>
          )}
        />
      </View>
    </View>
  );
};

export default GuideAffirmationsGallery;
