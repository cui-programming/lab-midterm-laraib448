import React from 'react';
import {Text } from '../ui'; // TODO: replace Text with ui/Text after export
import { styles } from '../../styles/styles';
import { View } from 'react-native';

/**
 * Custom/AboutMe
 * Shows name and registration number at the top.
 * Props: name (string), regNo (string)
 */
export default function AboutMe({ name, regNo }) {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{name}</Text>
      <Text style={styles.headerText}>{regNo}</Text>
    </View>
  );
}
