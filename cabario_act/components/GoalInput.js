import { useState } from "react";
import { Text,View, TextInput, Button, StyleSheet, Pressable } from "react-native";

export default function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');
  
    const goalInputHandler = enteredText => {
        setEnteredGoalText(enteredText);
    };
  
    const addGoalHandler = () => {
        props.onAddGoal(enteredGoalText)
        setEnteredGoalText('');
    };

    

    return(
        <View style={styles.inputContainer}>
            
            <TextInput
                placeholder="Your Course Goal"
                style={styles.textInput}
                onChangeText={goalInputHandler}
                value={enteredGoalText}
            />

            
            <Pressable onPress={addGoalHandler} style={styles.press}>
            <Text>Add Goal</Text>
            </Pressable>
            
        </View>
    );

}
const styles = StyleSheet.create({
    inputContainer:{
        flex: 1,
        alignItems: "center",
        flexDirection: 'row',
        justifyContent: 'space-between',
       
      },
      textInput:{
        borderWidth: 2,
        borderColor: "#cccccc",
        width: "80%",
        padding: 7,
        marginBottom: 20,
        marginTop: 20,
        marginRight: 20,
        borderRadius: 20,
      },
    press: {
        borderWidth: 2,
        padding: 6,
        borderRadius: 20,
        borderColor: "##11F25E",
        width: "30%",
        alignItems: 'center',
    },
  });