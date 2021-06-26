import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image, SafeAreaView } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios'

import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

import { connect } from 'react-redux';
import { authToken } from '../../actions/authActions';

function mapStateToProps(state) {
    return {
        auth: state.auth,
        errors: state.errors,
    };
}

const Landing = (props) => {
    const [islogin, setIsLogin] = useState(false);
    const navigation = useNavigation();

    React.useEffect(() => {
        if (props.errors.message == "access denied")
            console.log("access denied");
        if (props.auth.user)
            //console.log(props.auth.user);
            setIsLogin(true);
    }, [props.errors, props.auth])

    React.useEffect(() => {
        isLogin();
    }, [])


    const isLogin = async () => {
        const value = await AsyncStorage.getItem('token');
        // console.log('value', value);
        if (value == null) {
            setIsLogin(false);
        }
        else {
            props.authToken(value);
            console.log('42', props.errors);
            console.log('43', props.auth);
        }
    }


    return (
        <SafeAreaView style={styles.body}>
            <View style={styles.continer}>
                <Image style={styles.logo} source={require("../../../assets/logo.png")} />
                <Text style={styles.txtLogo}> FooDelicious</Text>
                <View>
                    <Image source={require("../../../assets/girl.png")} />
                    <Image style={styles.boy} source={require("../../../assets/boy.png")} />
                </View>

                <LinearGradient
                    colors={['#FF7F50', '#FA4A0C', '#FF7F50']}
                    style={styles.background}
                />

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => { islogin ? navigation.navigate("Menu", { data: props.auth.user }) : navigation.navigate('Welcom') }}
                >

                    <Text style={styles.btnText} >Get Started</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView >
    );
}

Landing.propTypes = {
    auth: PropTypes.object,
    errors: PropTypes.object
};
export default connect(mapStateToProps, { authToken })(Landing);



const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#FA4A0C',
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        margin: 40,
        marginBottom: 5,
        width: 70,
        height: 70,
        backgroundColor: '#ffff',
        borderRadius: 50,
    },
    txtLogo: {
        fontSize: 40,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#fff'
    },
    boy: {
        position: 'absolute',
        left: 200,
        top: 100
    },
    button: {
        backgroundColor: "#fff",
        padding: 15,
        borderRadius: 50,
        alignItems: "center",
    },
    btnText: {
        color: "#FA4A0C",
        fontSize: 20,
        justifyContent: "center",
        textAlign: "center",
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 550,
        height: 300,
    },
});
