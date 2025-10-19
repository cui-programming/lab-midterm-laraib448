import React from 'react';
import { Pressable, Text } from 'react-native';

/**
 * Minimal UI Button (no styling).
 * Students will style this via 'styles/styles.js'.
 */
export default function Button({ onPress, children, style, ...rest }) {
  return (
     <Pressable 
      onPress={onPress} 
      style={({ pressed }) => [
        {
          backgroundColor: '#10b981',
          paddingVertical: 12,
          paddingHorizontal: 24,
          borderRadius: 8,
          alignItems: 'center',
          justifyContent: 'center',
          minWidth: 80,
          opacity: pressed ? 0.8 : 1,
        },
        style // This allows custom styles to override defaults
      ]} 
      {...rest}
    >
      <Text style={{ color: 'white', fontWeight: '600', fontSize: 16 }}>
        {children}
      </Text>
    </Pressable>
  );
}
