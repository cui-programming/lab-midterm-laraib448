import React, { useState } from 'react';
import {TextInput, Button} from '../ui';
import { styles } from '../../styles/styles';
import { View, FlatList, Text, TouchableOpacity ,Pressable } from 'react-native'; 
import { initialAzkaar } from '../../data/azkaar';

/**
 * Custom/TasbihList
 * Renders a FlatList of azkaar with their counts.
 * NOTE: Increment/Decrement buttons are intentionally NOT implemented.
 * Students will add + and - controls using UI/Button and update state accordingly.
 */
export default function TasbihList({ items, setItems }) {
  
  // HINT ONLY (do not complete): you will need handlers like increment(id) / decrement(id)
    const increment = (id) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, count: item.count + 1 } : item
    ));
  };

  const decrement = (id) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, count: Math.max(0, item.count - 1) } : item
    ));
  };


  const renderItem = ({ item }) => (
    <View style={styles.itemRow}>
      <Text style={styles.itemName}>{item.phrase}</Text>
      <Text style={styles.counter}>{item.count}</Text>
      {/* TODO: Add increment/decrement buttons here using ui/Button */}
      <View style={styles.buttonContainer}>
  <Pressable 
    style={styles.incrementButton}
    onPress={() => increment(item.id)}
  >
    <Text style={styles.buttonText}>+</Text>
  </Pressable>
  <Pressable 
    style={styles.decrementButton}
    onPress={() => decrement(item.id)}
  >
    <Text style={styles.buttonText}>-</Text>
  </Pressable>
</View>
    </View>
  );

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Tasbih Counter</Text>
      <FlatList
        data={items}
        keyExtractor={(it) => it.id}
        renderItem={renderItem}
      />
    </View>
  );
}
