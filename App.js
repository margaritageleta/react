import React, { Component } from 'react';
import { StyleSheet, Text, View, PickerIOSComponent } from 'react-native';

export default function App() {
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
          Hello again
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
  },
});