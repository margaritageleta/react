// useState to use States from React library
// Sty;eSheet to use the CSS emulator 
import React, { useState } from 'react';
import { StyleSheet, Text, View, PickerIOSComponent, Button } from 'react-native';

export default function App() {

  // Define a state and its update function in brackets
  // useState hook, it gives the value to the state
  const [name, setName] = useState('Client');
  // Instead of a string, make an object  state
  const [person, setPerson] = useState({name: 'John', age: '27'});

  // Handler is a convention in React
  const clickHandler = () => {
    // update the name state
    setName('New Client');
    setPerson({name: 'Spurion', age: '23'})
  }

  return (
    // View is a div
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          Hi App
        </Text>
      </View>
      <View style={styles.body}>
        <Text>
          Your name: {name}
        </Text>
        <Text>
          His name is {person.name} and his age is {person.age}
        </Text>
      </View>
      <View style={styles.button}>
        {/* Button is a self closing tag in React native
        // So we use props to specify what text is gonna be in the button
        // A prop is title 
        // Another one is the onPress prop */}
        <Button title='update name' onPress={clickHandler}/>
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
  },
  button: {
    marginTop: 20,
  },
});