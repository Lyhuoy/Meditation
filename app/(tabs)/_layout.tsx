import React from 'react';
import { Tabs } from 'expo-router';
import { Colors } from '@/constants/Colors';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { StyleSheet } from 'react-native';

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.grey,
        tabBarLabelStyle: {
          fontSize: 12,
          textTransform: 'capitalize',
        },
        tabBarBackground: () => (
          <BlurView
            intensity={95}
            style={{
              ...StyleSheet.absoluteFillObject,
              overflow: 'hidden',
            }}
          />
        ),
        tabBarStyle: {
          position: 'absolute',
          padding: 8,
        },
      }}
    >
      <Tabs.Screen
        name="nature-meditate"
        options={{
          tabBarLabel: 'Nature Meditate',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="flower-tulip"
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="affirmations"
        options={{
          tabBarLabel: 'Affirmations',
          tabBarIcon: ({ color }) => (
            <Entypo name="open-book" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
