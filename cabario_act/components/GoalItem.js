import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Modal, Pressable } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

function GoalItem(props) {
  const [confirmationVisible, setConfirmationVisible] = useState(false);

  const handleDelete = () => {
    setConfirmationVisible(true);
  };

  const confirmDelete = () => {
    setConfirmationVisible(false);
    props.onDelete();
  };

  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{props.text}</Text>
      <TouchableOpacity onPress={handleDelete}>
        <Icon style={styles.Icon} name="times" size={20} color="red" />
      </TouchableOpacity>

      {/* Confirmation Modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={confirmationVisible}
        onRequestClose={() => setConfirmationVisible(false)}
      >
        <View style={styles.confirmationModalView}>
          <Text style={styles.confirmationText}>Are you sure you want to delete this item?</Text>
          <View style={styles.confirmationButtons}>
            <Pressable
              style={[styles.button, styles.confirmButton]}
              onPress={confirmDelete}
            >
              <Text style={styles.buttonText}>Confirm</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.cancelButton]}
              onPress={() => setConfirmationVisible(false)}
            >
              <Text style={styles.buttonText}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
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
  Icon: {
    marginLeft: 5,
  },
  goalText: {
    flex: 1,
  },
  confirmationModalView: {
    backgroundColor: '#FF6347',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '50%',
    marginHorizontal: '10%',
  },
  confirmationText: {
    marginBottom: 20,
  },
  confirmationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  button: {
    padding: 10,
    borderRadius: 10,
    width: 100,
    alignItems: 'center',
  },
  confirmButton: {
    backgroundColor: 'green',
  },
  cancelButton: {
    backgroundColor: 'red',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default GoalItem;
