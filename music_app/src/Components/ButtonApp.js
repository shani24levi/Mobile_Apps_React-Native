import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ButtonApp = ({ navigation = useNavigation() }) => {
    return (
        <TouchableOpacity
            style={styles.button}
            onPress={() => { navigation.navigate('LastSearchs'); }}
        >
            <Text style={styles.btnText} >Press Here</Text>
        </TouchableOpacity>
    );
}

export default ButtonApp;


const styles = StyleSheet.create({
    button: {
        backgroundColor: "green",
        padding: 15,
        borderRadius: 50,
        alignItems: "center",
    },
    btnText: {
        color: "white",
        fontSize: 20,
        justifyContent: "center",
        textAlign: "center",
    },
});


