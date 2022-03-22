import React, { useState } from "react";
import { StyleSheet, TextInput, View, Keyboard, Button } from "react-native";
import { SearchIcon } from "../../assets/icons";

type SearchBarProperties = {
    clicked?: boolean;
    searchPhrase?: string;
}

export const SearchBar: React.FC<SearchBarProperties> = () => {
    const [clicked, setClicked] = useState(false)
    const [searchPhrase, setSearchPhrase ] = useState('')

    return (
        <View style={styles.container}>
            <View
                style={
                    clicked
                        ? styles.searchBar__clicked
                        : styles.searchBar__unclicked
                }
            >
                <SearchIcon width={15} height={15} color="#bababa" />
                <TextInput
                    style={styles.input}
                    placeholder="Search"
                    value={searchPhrase}
                    selectionColor={'grey'}
                    onChangeText={setSearchPhrase}
                    onFocus={() => {
                        setClicked(true);
                    }}
                />
            </View>
            {clicked && (
                <View>
                    <Button
                        title="Cancel"
                        color="#2c2c2c"
                        onPress={() => {
                            Keyboard.dismiss();
                            setClicked(false);
                        }}
                    ></Button>
                </View>
            )}
        </View>
    );
};
export default SearchBar;

// styles
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: "100%",
        marginBottom: 8
    },
    searchBar__unclicked: {
        paddingLeft: 10,
        paddingVertical: 10,
        flexDirection: "row",
        width: "100%",
        backgroundColor: "#efefef",
        borderRadius: 8,
        alignItems: "center",
    },
    searchBar__clicked: {
        paddingLeft: 10,
        flexDirection: "row",
        width: "80%",
        backgroundColor: "#efefef",
        borderRadius: 8,
        alignItems: "center",
    },
    input: {
        fontSize: 20,
        marginLeft: 5,
        width: "90%",
    },
});