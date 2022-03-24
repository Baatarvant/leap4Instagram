import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Image, FlatList, Dimensions, View, ActivityIndicator, Text, TouchableOpacity } from "react-native";
import { PhotoIdentifier, GetPhotosParams, getPhotos } from "@react-native-community/cameraroll";
import { ArrowRightIcon, ExitIcon, StackIcon } from "../assets/icons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation";

const width = Dimensions.get('window').width;

interface Data {
    photos: PhotoIdentifier[],
    end?: string,
    next: boolean
}

interface Props {
    navigation: NativeStackNavigationProp<RootStackParamList, 'Gallery'>
}

export const GalleryScreen = (props: Props) => {
    const { navigation } = props;
    const [data, setData] = useState<Data | null>(null);
    const [selected, setSelected] = useState<number | number[]>(0);

    const options: GetPhotosParams = {
        first: 36,
        include: []
    };

    const getData = (after?: string) => {
        getPhotos({ ...options, after: after ?? undefined })
            .then((res) => {
                setData(prev => ({
                    photos: prev ? [...prev.photos, ...res.edges] : res.edges,
                    end: res.page_info.end_cursor,
                    next: res.page_info.has_next_page
                }))
            })
            .catch((err) => { console.log(err) })
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerGroup}>
                    <TouchableOpacity onPress={() => { navigation.goBack() }}>
                        <ExitIcon />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>Add Post</Text>
                </View>
                <TouchableOpacity
                    onPress={() => {
                        if (data) {
                            navigation.navigate(
                                'CreatePost',
                                { images: Array.isArray(selected) ? selected.map((n) => data.photos[n]) : [data.photos[selected]] }
                            )
                        }
                    }}
                >
                    <ArrowRightIcon />
                </TouchableOpacity>
            </View>
            {data &&
                <FlatList
                    style={styles.list}
                    stickyHeaderIndices={[0]}
                    ListHeaderComponent={
                        <View style={styles.listHeaderContainer}>
                            <Image
                                style={styles.lastImage}
                                source={{
                                    uri: data.photos[Array.isArray(selected) ? selected[selected.length - 1] : selected].node.image.uri
                                }}
                            />
                            <View style={styles.listHeaderInnerContainer}>
                                <Text style={styles.listHeaderTitle}>Gallery</Text>
                                <TouchableOpacity
                                    onPress={() => {
                                        if (Array.isArray(selected)) {
                                            setSelected(selected[selected.length - 1]);
                                        } else {
                                            setSelected([selected])
                                        }
                                    }}>
                                    <StackIcon focused={Array.isArray(selected)} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    }
                    data={data.photos}
                    renderItem={({ item, index }) => {
                        const selectedId = Array.isArray(selected) ? selected.findIndex(e => e === index) : null;
                        return (
                            <TouchableOpacity
                                onPress={() => {
                                    if (Array.isArray(selected)) {
                                        if (selected.includes(index) && selected.length > 1) {
                                            setSelected(selected.filter(el => el !== index))
                                        } else {
                                            setSelected([...selected, index])
                                        }
                                    } else {
                                        setSelected(index);
                                    }
                                }}>
                                <Image
                                    style={[
                                        styles.image,
                                        {
                                            opacity: index === (Array.isArray(selected)
                                                ? selected[selected.length - 1]
                                                : selected
                                            ) ? 0.5 : 1
                                        }
                                    ]}
                                    key={index.toString()}
                                    source={{ uri: item.node.image.uri }}
                                />
                                {selectedId !== null &&
                                    <View
                                        style={[
                                            styles.indicator,
                                            { backgroundColor: selectedId > -1 ? '#1FA1FF' : 'rgba(255,255,255,0.5)' }
                                        ]}
                                    >
                                        {selectedId > -1 && <Text style={styles.indicatorText}>{selectedId + 1}</Text>}
                                    </View>
                                }
                            </TouchableOpacity>
                        )
                    }}
                    keyExtractor={(_item, index) => index.toString()}
                    numColumns={4}
                    onEndReached={() => {
                        if (data.next) {
                            getData(data.end);
                        }
                    }}
                />
            }
            {
                !data &&
                <View style={styles.loaderContainer}>
                    <ActivityIndicator />
                </View>
            }
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    headerGroup: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    headerText: {
        fontSize: 16,
        marginLeft: 12,
        fontWeight: 'bold'
    },
    list: {
        flex: 1,
        backgroundColor: '#fff',
    },
    loaderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: width / 4,
        height: width / 4,
    },
    listHeaderContainer: {
    },
    listHeaderInnerContainer: {
        paddingHorizontal: 12,
        paddingVertical: 8,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    listHeaderTitle: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    lastImage: {
        width: width,
        height: width
    },
    indicator: {
        borderWidth: 1,
        borderColor: '#fff',
        position: 'absolute',
        width: 24,
        height: 24,
        borderRadius: 12,
        right: 8,
        top: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    indicatorText: {
        fontSize: 14,
        color: '#fff'
    },
})