// useState to use States from React library
// StyleSheet to use the CSS emulator 
// ScrollView a wrapper that allows scrolling inside 
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {

  const [sensors, setSensor] = useState([
    {name: 'Sensor1', key: '1'},
    {name: 'Sensor2', key: '2'},
    {name: 'Sensor3', key: '3'},
    {name: 'Sensor4', key: '4'},
    {name: 'Sensor5', key: '5'},
    {name: 'Sensor6', key: '6'},
  ]);

  // map cycles through an array in JS
  // return a text component for each elem in array for example
  // in general, return a JSX template
  // That dynamic code yaaay
  // put it in curly braces

  return (
    <View style={styles.container}>
      
    {/* <ScrollView>
    {sensors.map(item => {

      return (
        <View key={item.key}>
          <Text style={styles.item}>{item.name}</Text>
        </View>
      )
    })}
    </ScrollView> */}
    
    {/*Data prop defines the data we are going to cycle through
      renderItem prop returns some JSX
      Data must have a key property and FlatList looks for key automatically
      Keys must be strings
      Flatlist does not load everything at once, like map + scrollview
      numColumns prop useful
    */}
      <FlatList 
        numColumns={2}
        data={sensors}
        renderItem={({ item }) => {
          return (
            <Text style={styles.item}>{item.name}</Text>
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