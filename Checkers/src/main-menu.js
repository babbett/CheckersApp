import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

export default function MainMenu() {
  return (
      <View style={styles.buttoncontainer}>
          <Text style={styles.title}>Checkers</Text>
          <View style={styles.buffer}/>
          <Button title="Solo Play"/>
          <View style={styles.buffer}/>
          <Button title="Online Play"/>
          <View style={styles.buffer}/>
          <Button title="Options"/>
      </View>
  );
}
 
const styles = StyleSheet.create({
    buttoncontainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    title: {
        fontSize: 30,
        fontFamily: "Roboto"
    },
    
    buffer: {
        height: Dimensions.get('window').height / 30
    }

});
