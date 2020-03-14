import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

// receive props as params
// destructure from props params with curly braces
export function SensorItem({data}) {
    // return JSX
    return (
        <TouchableOpacity onPress={() => 1}>
            <Text style={styles.sensor}>
                {data.name}
            </Text>
        </TouchableOpacity>
    )
}

export function SensorAddItem({data}) {
    // return JSX
    return (
        <TouchableOpacity onPress={() => 1}>
            <Text style={styles.sensorAdd}>
                {data.name}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
   sensor: {
    padding: 16,
    marginTop: 16,
    borderColor: 'gainsboro',
    borderWidth: 1,
    //borderRadius: 10,  
    backgroundColor: 'transparent',  
   }, 
   sensorAdd: {
    padding: 16,
    marginTop: 16,
    borderColor: 'coral',
    borderWidth: 2,
    //borderRadius: 10,  
    color: 'coral',  
    fontWeight: 'bold',
    backgroundColor: 'oldlace',
   },
})