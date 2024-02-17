import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

const PressableProp = () => {
  const handlePress = () => {
    console.log('Pressed!');
  };

  const handlePressIn = () => {
    console.log('Press In!');
  };

  const handlePressOut = () => {
    console.log('Press Out!');
  };

  const handleLongPress = () => {
    console.log('Long Pressed!');
  };

  return (
    <View style={styles.container}>

      <View style={styles.pressing}>
      <Pressable
        onPressIn={handlePressIn}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? 'skyblue' : 'steelblue',
          },
          styles.pressable,
        ]}
      >
        <Text style={styles.text}>Press Me</Text>
        <Text style={styles.text}>onPressIn</Text>
      </Pressable>

      <Pressable
        onPress={handlePress}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? 'skyblue' : 'steelblue',
          },
          styles.pressable,
        ]}
      >
        <Text style={styles.text}>Press Me</Text>
        <Text style={styles.text}>onPress</Text>
      </Pressable>
      </View>
      
      <View style={styles.pressing2}>
      <Pressable
        onPressOut={handlePressOut}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? 'skyblue' : 'steelblue',
          },
          styles.pressable,
        ]}
      >
        <Text style={styles.text}>Press Me</Text>
        <Text style={styles.text}>onPressOut</Text>
      </Pressable>

      <Pressable
        onLongPress={handleLongPress}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? 'skyblue' : 'steelblue',
          },
          styles.pressable,
        ]}
      >
        <Text style={styles.text}>Press Me</Text>
        <Text style={styles.text}>onLongPress</Text>
      </Pressable>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressable: {
    padding: 30,
    borderRadius: 5,
    marginRight: 10,
    marginLeft: 10,
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
  pressing: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  pressing2: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
});

export default PressableProp;
