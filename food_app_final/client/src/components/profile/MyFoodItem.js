import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    FlatList,
    Dimensions,
    Alert,
    ScrollView,
    TouchableHighlight
} from 'react-native';

function MyFoodItem(props) {
    const { i, amount, title, img, avilibal, description, date } = props;
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={{ uri: img }} />
            <View style={styles.cardContent}>
                <Text style={styles.name}>{amount} {title}</Text>
                <Text style={styles.count}>avilibal: {avilibal ? "Yes" : "No"}</Text>
                <Text style={styles.count}>Date : {date}</Text>

                <Text style={styles.count}>{description}</Text>

                <View style={styles.buttons}>
                    <TouchableHighlight style={[styles.button, styles.view]} onPress={() => props.clickDelete(i)}>
                        <Image style={styles.icon} source={{ uri: "https://img.icons8.com/emoji/48/000000/cross-mark-emoji.png" }} />
                    </TouchableHighlight>

                    <TouchableHighlight style={[styles.button, styles.view]} onPress={() => props.clickOk(i)}>
                        <Image style={styles.icon} source={{ uri: "https://img.icons8.com/emoji/48/000000/pencil-emoji.png" }} />
                    </TouchableHighlight>
                </View>

            </View>
        </View>
    );
}
export default MyFoodItem;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        backgroundColor: "#ebf0f7"
    },
    contentList: {
        flex: 1,
    },
    cardContent: {
        marginLeft: 20,
        marginTop: 10
    },
    image: {
        width: 90,
        height: 90,
        borderRadius: 45,
        borderWidth: 2,
        borderColor: "#ebf0f7"
    },

    card: {
        shadowColor: '#00000021',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,

        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
        backgroundColor: "white",
        padding: 10,
        flexDirection: 'row',
        borderRadius: 30,
    },

    name: {
        fontSize: 18,
        flex: 1,
        alignSelf: 'center',
        color: "#FA4A0C",
        fontWeight: 'bold'
    },
    count: {
        fontSize: 14,
        flex: 1,
        alignSelf: 'center',
        color: "#D2691E"
    },
    followButton: {
        marginTop: 10,
        height: 35,
        width: 100,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "#dcdcdc",
    },
    followButtonText: {
        color: "#dcdcdc",
        fontSize: 12,
    },
    buttons: {
        flexDirection: 'row',
    },
    button: {
        height: 35,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        width: 50,
        marginRight: 5,
        marginTop: 5,
    },
    icon: {
        width: 20,
        height: 20,
    },
    view: {
        backgroundColor: "#eee",
    },
    profile: {
        backgroundColor: "#1E90FF",
    },
    message: {
        backgroundColor: "#228B22",
    },
});
