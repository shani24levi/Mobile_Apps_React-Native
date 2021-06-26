import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    Alert,
    Image,
    FlatList,
    TouchableOpacity, ScrollView
} from 'react-native';

function MessagItem(props) {
    const { i, approved, date, food, receiver, sender } = props;
    return (
        <View style={styles.box}>
            <Image style={styles.image} source={{ uri: `https:${sender.avatar}` }} />
            <View style={styles.boxContent}>
                <Text style={styles.title}>approved: {approved ? 'Yes' : 'Not Yet'}</Text>
                <Text style={styles.description}>{food.type!=null ?food.type: 'Yammy'}</Text>
                <View style={styles.buttons}>
                    <TouchableHighlight style={[styles.button, styles.view]} onPress={() => props.clickDelete(i)}>
                        <Image style={styles.icon} source={{ uri: "https://img.icons8.com/emoji/48/000000/cross-mark-emoji.png" }} />
                    </TouchableHighlight>

                    <TouchableHighlight style={[styles.button, styles.profile]} onPress={() => props.clickOk(i)}>
                        <Image style={styles.icon} source={{ uri: "https://img.icons8.com/emoji/48/000000/ok-hand-light-skin-tone.png" }} />
                    </TouchableHighlight>
                </View>
            </View>
        </View>
    );
}

export default MessagItem;

const styles = StyleSheet.create({
    container: {
        padding: 30,
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 100,
    },
    box: {
        padding: 20,
        marginTop: 5,
        marginBottom: 5,
        backgroundColor: 'white',
        flexDirection: 'row',
    },
    boxContent: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginLeft: 10,
    },
    title: {
        fontSize: 18,
        color: "#151515",
    },
    description: {
        fontSize: 15,
        color: "#646464",
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