import React from 'react';
import {
  Button,
  Text,
  View,
  StyleSheet
} from 'react-native';


export const ButtonLong = () => {


  return (

    <View style={styles.editButton}>
      <Button
        onPress={(e) => console.log('a')}
        color="black"
        title="Edit Profile">
        <Text>
          Edit
        </Text>
      </Button>
    </View>

  );
};

const styles = StyleSheet.create({
  editButton: {
    color: 'white',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    width: 300
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

