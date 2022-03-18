import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { DownArrowIcon } from "../assets/icons";

export const CommentScreen = () => {
  return (
    <View>
      <DownArrowIcon />
      <Text>comment</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
