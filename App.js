import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import Header from './components/header';
import { SensorItem, SensorAddItem} from './components/sensorItem';

export default function App() {

  const [sensors, setSensors] = useState([
    {name: 'Sensor 1', key: '1'},
    {name: 'Sensor 2', key: '2'},
    {name: 'Sensor 3', key: '3'},
  ]);


  return (
    <View style={styles.container}>
      {/* HEADER */}
      <Header/>
      <View style={styles.content}>
        {/*TO DO FORM*/}
        <View style={styles.list}>
          <FlatList
            data={sensors}
            renderItem={({ item }) => (
              <SensorItem data={item}/>
            )}
          />
          <SensorAddItem data={{ name: '+ Añadir sensor'}}/>
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
    backgroundColor: 'transparent',
    marginHorizontal: 10,
  },
  list: {
    //marginTop: 20,
  },
});