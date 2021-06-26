import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Alert,
    ScrollView,
    FlatList,
} from 'react-native';
import styles from './style'

function ButtonsCircels(props) {

    let data = [
        { id: "info", title: "My Info", image: "https://img.icons8.com/emoji/48/000000/house-emoji.png" },
        { id: "food", title: "My Foods", image: "https://img.icons8.com/emoji/48/000000/sandwich-emoji.png" },
        { id: "edit", title: "Edit", image: "https://img.icons8.com/emoji/48/000000/hammer-and-wrench.png" },
    ]

    return (
        <View>
            <FlatList style={styles.list}
                contentContainerStyle={styles.listContainer}
                data={data}
                horizontal={false}
                numColumns={4}
                keyExtractor={(item) => {
                    return item.id;
                }}
                renderItem={({ item }) => {
                    return (
                        <View>
                            <TouchableOpacity style={styles.card} onPress={() => props.changeView(item.id)}>
                                <Image style={styles.cardImage} source={{ uri: item.image }} />
                            </TouchableOpacity>

                            <View style={styles.cardHeader}>
                                <View style={{ alignItems: "center", justifyContent: "center" }}>
                                    <Text style={styles.title}>{item.title}</Text>
                                </View>
                            </View>
                        </View>
                    )
                }} />
        </View>
    );
}

export default ButtonsCircels;