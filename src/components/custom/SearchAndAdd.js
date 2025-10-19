import React, { useState } from 'react';
import {View, Text, TextInput, Button,FlatList} from '../ui'
import { styles } from '../../styles/styles';
import { initialAzkaar } from '../../data/azkaar';

/**
 * Custom/SearchAndAdd
 * Students implement:
 *  - a text box to add a new zikr (phrase only, count starts at 0)
 *  - a search box to filter existing azkaar by phrase
 *  - use only components from 'ui' for inputs and buttons
 *  - lifting state up if needed
 */
export default function SearchAndAdd({ items, setItems }) {
  const [searchText, setSearchText] = useState('');
  const [newPhrase, setNewPhrase] = useState('');

  const filteredItems = items.filter(item =>
    item.phrase.toLowerCase().includes(searchText.toLowerCase())
  );

  const addNewItem = () => {
    if (newPhrase.trim() && !items.find(item => item.phrase === newPhrase)) {
      const newItem = {
        id: Date.now().toString(),
        phrase: newPhrase,
        count: 0
      };
      setItems([...items, newItem]);
      setNewPhrase('');
    }
  };

  return (
    <View style={styles.section}>
     {/* TODO: Implement search and add UI here using ui/TextInput and ui/Button */}

      <Text style={styles.sectionTitle}>Search & Add</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Search phrases..."
        value={searchText}
        onChangeText={setSearchText}
      />
      
      <View style={styles.addContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter new phrase..."
          value={newPhrase}
          onChangeText={setNewPhrase}
        />
        <Button style={styles.addButton} onPress={addNewItem}>Add</Button>
      </View>

      <FlatList
        data={filteredItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemRow}>
            <Text style={styles.itemName}>{item.phrase}</Text>
            <Text style={styles.counter}>{item.count}</Text>
          </View>
        )}
      />
    </View>
  );
}
