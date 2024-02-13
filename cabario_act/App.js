import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, Pressable } from "react-native";
import { useState } from "react";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [enteredGoalText, setEnteredGoalText] = useState('');

  const addGoalHandler = (enteredGoalText) => {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals,
      { text: enteredGoalText, key: Math.random().toString() }
    ]);
    setEnteredGoalText('');
  };

  return (
    <View style={styles.container}>
    <View>
      <GoalInput onAddGoal={addGoalHandler}/>
    </View>

    <Text style={styles.goallist}>List of Goals</Text>
    <View style={styles.goalListsContainer}>
      <FlatList 
        data={courseGoals} 
        renderItem={({item}) => (
          <GoalItem text={item.text} />   
      )} />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#00ffcc",
  },
  goallist: {
    alignItems: 'center',
    width: "100%",
    borderBottomWidth: 2,
    padding: 10,
    color: 'black',
  },
  appcontainer: {
    paddingTop:50,
    flex: 1,
  },
});