// useState to use States from React library
// StyleSheet to use the CSS emulator 
// ScrollView a wrapper that allows scrolling inside 
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import Header from './components/header';

export default function App() {
  const [todos, setTodos] = useState([
    {text: 'buy tea', key: '1'},
    {text: 'create an app', key: '2'},
    {text: 'play videogames',  key: '3'},
  ]);

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <Header/>
      <View style={styles.content}>
        {/*TO DO FORM*/}
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <Text>{item.text}</Text>
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'ghostwhite',
  },
  content: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'gold',
    fontSize: 24,
    marginHorizontal: 10,
  },
  list: {
    //marginTop: 20,
  },
});