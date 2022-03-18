import React, { FC, useState } from "react";
import { Button, View, StyleSheet, Image, Text, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation";

type CommentScreenProps = NativeStackScreenProps<RootStackParamList, "Comment">;

const styles = StyleSheet.create({
  directionRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  profilePic: {
    width: 24,
    height: 24,
    borderRadius: 50,
    margin: 8,
  },
  input: {
    fontSize: 12.5,
    flex: 1,
  },
  ago: {
    fontSize: 11,
    color: "#9999",
    marginVertical: 3,
    marginHorizontal: 8,
  },
  emoji: {
    marginRight: 8,
  },
  viewComments: {
    margin: 8,
    color: "#9999",
  },
});

type Props = {
  uri?: string;
};

export const PostComment: FC<Props> = (props) => {
  const { uri = "https://picsum.photos/200" } = props;
  const [text, onChangeText] = useState("");
  const navigation = useNavigation<CommentScreenProps>();

  return (
    <View>
      <View style={styles.directionRow}>
        <Image
          style={styles.profilePic}
          source={{
            uri: uri,
          }}
        />
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={onChangeText}
          placeholder="Add comment..."
        />
        <Text style={styles.emoji} onPress={() => onChangeText(text + "😘")}>
          😘
        </Text>

        <Text style={styles.emoji} onPress={() => onChangeText(text + "😭")}>
          😭
        </Text>
      </View>
      <Text style={styles.ago}>10 minutes ago</Text>
      <Text
        onPress={() => navigation.navigate("Comment")}
        style={styles.viewComments}
      >
        comments...
      </Text>
    </View>
  );
};
