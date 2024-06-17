import { View, Text } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import Content from './Content';

interface AppGradientProps {
  children: any;
  colors: string[];
}

const AppGradient = ({ children, colors }: AppGradientProps) => {
  return (
    <LinearGradient colors={colors} style={{ flex: 1 }}>
      <Content>{children}</Content>
    </LinearGradient>
  );
};

export default AppGradient;
