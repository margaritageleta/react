// useState to use States from React library
// StyleSheet to use the CSS emulator 
// TextInput for text input fields
// READ ABOUT ALL THE PROPS FOR INPUT FIELDS HERE https://reactnative.dev/docs/textinput
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {

  const [name, setName] = useState('unknown');
  const [age, setAge] = useState('unknown');


  return (
    // View is a div
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          Hi App
        </Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.headerText}>Enter name</Text>
        {/* Stack props */}
        <TextInput 
          style={styles.input}
          placeholder='e.g. John Tyler'
          onChangeText={input => setName(input)}/>
        
        <Text style={styles.headerText}>Enter age</Text>
        {/* Stack props */}
        <TextInput 
          keyboardType='numeric'
          style={styles.input}
          placeholder='e.g. 99'
          onChangeText={input => setAge(input)}/>
        
        <Text style={styles.headerText}>Describe your life</Text>
        {/* Stack props */}
        <TextInput 
          multiline
          style={styles.input}
          placeholder='e.g. When I was a kid ...'/>
        
        <Text>
          Your name is {name} and your age is {age}
        </Text>
      </View>
    </View>
  );
}

// Define CSS in styles
const styles = StyleSheet.create({
  // each of these is an object
  container: {
    flex: 1,
    backgroundColor: 'ghostwhite',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: 'pink',
    padding: 20,
  },
  headerText: {
    fontWeight: 'bold',
  },
  body: {
    backgroundColor: 'honeydew',
    padding: 20,
    borderColor: 'black',
    borderWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input:{
    // By default it does not have border
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  },
});