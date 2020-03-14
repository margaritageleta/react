// useState to use States from React library
// StyleSheet to use the CSS emulator 
// ScrollView a wrapper that allows scrolling inside 
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

export default function App() {

  const [sensors, setSensor] = useState([
    {name: 'Sensor1', key: '1'},
    {name: 'Sensor2', key: '2'},
    {name: 'Sensor3', key: '3'},
    {name: 'Sensor4', key: '4'},
    {name: 'Sensor5', key: '5'},
    {name: 'Sensor6', key: '6'},
  ]);

  const pressHandler = (id) => {
    console.log(id);
    // function that returns the new state or the current state
    // This is much safer
    setSensor((prevSensors) => {
      return prevSensors.filter(sensor => sensor.key != id)
    })
  }

  return (
    <View style={styles.container}>
      
      <FlatList 
        numColumns={2}
        data={sensors}
        renderItem={({ item }) => {
          return (
            // Everythin is inside this tag is touchable
            // Add an onPress handler
            <TouchableOpacity onPress={() => pressHandler(item.key)}>
              <Text style={styles.item}>{item.name}</Text>
            </TouchableOpacity>
          )
        }}
      />

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
    backgroundColor: 'gold',
    fontSize: 24,
    marginHorizontal: 10,
  },
});