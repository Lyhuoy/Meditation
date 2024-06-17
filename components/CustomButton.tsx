import { Text, TouchableOpacity, TextStyle, ViewStyle } from 'react-native';
import React from 'react';

interface CustomButtonProps {
  onPress: () => void;
  title: string;
  textStyles?: TextStyle;
  containerStyles?: ViewStyle;
}

const CustomButton = ({
  onPress,
  title,
  textStyles,
  containerStyles,
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: 'white',
        minHeight: 56,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        ...containerStyles,
      }}
    >
      <Text
        style={{
          fontSize: 16,
          fontWeight: 'bold',
          color: 'black',
          ...textStyles,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
