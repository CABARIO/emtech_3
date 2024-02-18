import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

function GoalItem(props) {
  return (
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{props.text}</Text>
        <TouchableOpacity onPress={props.onDelete}>
          <Icon style={styles.Icon} name="times" size={20} color="red" />
        </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
  goalListsContainer:{

  },
  goalItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    borderWidth: 2,
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#00cc99',
    borderColor: '#00cc99',
    marginBottom: 10,

  },
  Icon:{
    marginLeft: 5,
  },
  goalText: {
    flex: 1,
  },
  goalListsContainer: {
    flex: 5,
  },
});

export default GoalItem;