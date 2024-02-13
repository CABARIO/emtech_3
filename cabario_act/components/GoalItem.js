import React from "react";
import { StyleSheet, View, Text } from "react-native"
function GoalItem(props) {
    return(
        <View style={styles.goalListsContainer}>
            <Text style={styles.goalItems}>{props.text}</Text>
        </View>
      )
}

const styles = StyleSheet.create({
  goalItems: {
    marginTop: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    borderColor: '#00cc99',
    backgroundColor: '#00cc99'
  },
  goalListsContainer: {
    flex: 5,
  },
})
  export default GoalItem;

