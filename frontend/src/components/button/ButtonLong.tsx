import React from "react";
import { Text, View, StyleSheet, Touchable, TouchableOpacity } from "react-native";


export const ButtonLong = () => {

  return (
    <TouchableOpacity
      style={styles.editButton}
      onPress={(e) => console.log('a')}>
      <Text style={styles.innerText}>
        Edit Profile
      </Text>
    </TouchableOpacity>

  );
};

const styles = StyleSheet.create({
  editButton: {
    borderWidth: 0.7,
    borderColor: '#CBCBCB',
    borderRadius: 3,
    width: '95%',
    backgroundColor: '#FFF',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
  },
  innerText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#000'

  }
});

