import React, { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";

interface Props {
    username?: string;
    description?: string;
}

export const PostDescription = (props: Props) => {
    const {
        username = 'username',
        description = 'Fugiat aliquip non aliquip ullamco ipsum voluptate commodo aliquip Lorem mollit. Reprehenderit ullamco culpa ex duis aliqua quis proident reprehenderit ullamco do ullamco sint in non. Esse reprehenderit in enim aute enim enim est. Ipsum exercitation cillum nisi mollit incididunt ipsum occaecat. Do minim consectetur sit magna veniam cupidatat quis velit et ipsum eiusmod eu ad. Enim commodo tempor anim magna adipisicing esse ullamco tempor laborum esse culpa cillum.'
    } = props;
    const [expanded, setExpanded] = useState(false);



    return (
        <View style={styles.container}>
            <Text numberOfLines={expanded ? undefined : 2} ellipsizeMode="middle">
                <Text onPress={() => { Alert.alert("You clicked username") }} style={styles.username}>{username}</Text>
                {' '}
                {description}
                {!expanded && <Text style={styles.more} onPress={() => setExpanded(true)}>...more</Text>}
            </Text>
        </View >
    )
}


const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 12,
        paddingVertical: 4,
    },
    username: {
        fontWeight: "bold",
    },
    more: {
        opacity: 0.5
    }
})