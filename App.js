// useState to use States from React library
// StyleSheet to use the CSS emulator 
// ScrollView a wrapper that allows scrolling inside 
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {

  const [sensors, setSensor] = useState([
    {name: 'Sensor1', key: 1},
    {name: 'Sensor2', key: 2},
    {name: 'Sensor3', key: 3},
    {name: 'Sensor4', key: 4},
    {name: 'Sensor5', key: 5},
    {name: 'Sensor6', key: 6},
  ]);

  // map cycles through an array in JS
  // return a text component for each elem in array for example
  // in general, return a JSX template
  // That dynamic code yaaay
  // put it in curly braces

  return (
    <View style={styles.container}>
      
    <ScrollView>
    {sensors.map(item => {

      return (
        <View key={item.key}>
          <Text style={styles.item}>{item.name}</Text>
        </View>
      )
    })}
    </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'ghostwhite',
    //alignItems: 'center',
    //justifyContent: 'center',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'plum',
    fontSize: 24,
  },
});