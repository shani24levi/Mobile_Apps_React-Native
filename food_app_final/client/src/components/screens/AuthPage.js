import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableHighlight } from 'react-native';
import axios from 'axios';
import Login from '../auth/Login';
import SignIn from '../auth/SignIn';

function AuthPage(props) {
    const [islogin, setIsLogin] = useState(true);

    return (
        <View style={styles.body}>
            <View style={styles.container}>
                <Image style={styles.image} source={require("../../../assets/logo.png")} />
                <View style={{ flex: 1, flexDirection: 'row' , justifyContent:'center'}}>
                    <TouchableHighlight    
                        style={islogin ? styles.buttonClicled : styles.button}
                        activeOpacity={0.6}
                        underlayColor="#DDDDDD"
                        onPress={() => setIsLogin(true)}
                    >
                        <Text style={styles.btnText} >Login</Text>
                    </TouchableHighlight>

                    <TouchableHighlight
                        style={!islogin ? styles.buttonClicled : styles.button}
                        activeOpacity={0.6}
                        underlayColor="#DDDDDD"
                        onPress={() => setIsLogin(false)}
                    >
                        <Text style={styles.btnText} >Sign in</Text>
                    </TouchableHighlight>
                </View>
            </View>

            <View style={{ flex: 1 }}>
                {
                    islogin
                        ? <Login />
                        : <SignIn />
                }
            </View>
        </View>
    );
}

export default AuthPage;

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#EFEEEE',
    },
    container: {
        height: 300,
        //flex: 1,
        backgroundColor: '#ffff',
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        marginTop: 50,
        marginBottom: 50,
    },
    button: {
        width:100,
        alignItems: "center",
    },
    buttonClicled:{
        width:100,
        alignItems: "center",
        borderBottomColor: '#FA4A0C',
        borderBottomWidth: 5
    },
    btnText: {
        fontSize: 15,
        justifyContent: "center",
        textAlign: "center",
    },

})