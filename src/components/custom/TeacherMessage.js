import React from 'react';
import { Text,View } from '../ui';
import { styles } from '../../styles/styles';

const TeacherMessage = () => {
  return (
    <View style={styles.teacherMessage}>
      <Text style={styles.messageText}>keep learning React Native!</Text>
    </View>
  );
};

export default TeacherMessage;