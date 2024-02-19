import { StyleSheet, Text, View, Modal, FlatList, Pressable } from "react-native";
import { useState } from "react";
import Icon from 'react-native-vector-icons/FontAwesome';

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [usermodalVisible, usersetModalVisible] = useState(false);
  const [warningModalVisible, setWarningModalVisible] = useState(false);

  const addGoalHandler = (enteredGoalText) => {
    const newGoal = { text: enteredGoalText, key: Math.random().toString() };
    setCourseGoals(currentCourseGoals => {
      const updatedGoals = [newGoal, ...currentCourseGoals.slice(0, 9)];
      return updatedGoals;
    });
    setEnteredGoalText('');
    if (courseGoals.length + 1 > 4) {
      setWarningModalVisible(true);
    }
  };

  const deleteGoalHandler = (key) => {
    setCourseGoals(currentCourseGoals =>
      currentCourseGoals.filter(goal => goal.key !== key)
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.user}>
      <Pressable onPress={() => usersetModalVisible(true)}>
      <Icon name="user" size={50} style={styles.usericon} />
      </Pressable>
     
      </View>
      
      <Modal
        animationType="fade"
        transparent={true}
        visible={usermodalVisible}
        onRequestClose={() => usersetModalVisible(false)}
      >
        <View style={styles.userModalView}>
          <Text style={styles.usermodalText}>Welcome User!</Text>
          <Pressable
            onPress={() => usersetModalVisible(false)}
            style={styles.userbutton}
          >
            <Icon style={styles.times} name="times" size={20} color="red" />
          </Pressable>
        </View>
      </Modal>

      <View>
        <GoalInput onAddGoal={addGoalHandler}/>
      </View>
    <View style={styles.Line}></View>
      <Pressable style={styles.tapMe} onPress={() => setModalVisible(true)}>
        <Icon name="arrow-circle-right" size={20} style={styles.icon} />
        <Text style={styles.pressableText}>Show Goals</Text>
      </Pressable>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalText}>List of Goals
          <Pressable
            onPress={() => setModalVisible(false)}
            style={styles.Closed}
          >
          <Icon style={styles.times} name="times" size={20} color="red" />
          </Pressable> 
          
          </Text>
          <FlatList 
            data={courseGoals} 
            renderItem={({item}) => (
              <GoalItem text={item.text} onDelete={() => deleteGoalHandler(item.key)} />   
            )} 
          />
        </View>
      </Modal>

      <Modal
        animationType="fade"
        transparent={true}
        visible={warningModalVisible}
        onRequestClose={() => setWarningModalVisible(false)}
      >
        <View style={styles.warningModalView}>
          <Text style={styles.warningModalText}>Warning: You Already Have 5 Goals</Text>
          <Pressable
            onPress={() => setWarningModalVisible(false)}
            style={styles.warningButtonClose}
          >
            <Text style={styles.CloseBtn}>Close</Text>
          </Pressable>
        </View>
      </Modal>

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
  user:{
    alignSelf: 'center',
    padding: 20,
    borderRadius: 100,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    
  },
  userModalView:{
    backgroundColor: "#1ED9D2",
    alignItems: 'center',
    marginTop: "20%",
    marginLeft: "10%",
    marginRight: "10%",
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  userbutton:{
    marginBottom: 10,
  },
  usermodalText:{
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: 30,
  },
  usericon:{
    color: 'black',
  },
  Line:{
    width:'100%',
    borderWidth: 1,
    marginBottom: 20,
    alignSelf: 'center',
  },
  tapMe: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#11F25E',
    borderColor: '#11F212',
    padding: 10,
    borderRadius: 20,
  },
  pressableText: {
    color: 'white',
    fontWeight: 'bold',
    marginRight: 5,
  },
  icon: {
    color: 'white',
    marginRight: 5,
  },
  modalView: {
    backgroundColor: "#8EECF5",
    alignItems: 'center',
    marginTop: "20%",
    marginLeft: "10%",
    marginRight: "10%",
    marginBottom: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalText:{
    marginTop: 5,
    alignContent: 'space-between',
    width: '90%',
    marginBottom: 10,
  },
  Closed:{
    marginLeft: '65%'
  },
  buttonClose:{
    width: '60%',
    padding: 10,
    borderWidth: 2,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#0DB88D',
    borderColor: '#0DB88D',
  },
  warningModalView: {
    backgroundColor: "#FF6347",
    alignItems: 'center',
    marginTop: "20%",
    marginLeft: "10%",
    marginRight: "10%",
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  warningModalText:{
    marginTop: 50,
    marginBottom: 30,
    alignSelf: 'center',
  },
  warningButtonClose:{
    width: '60%',
    padding: 10,
    borderWidth: 2,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#FF6347',
    borderColor: '#FF6347',
  },
});
