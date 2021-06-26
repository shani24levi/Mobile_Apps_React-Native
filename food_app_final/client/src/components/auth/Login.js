import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ScrollView, Text, View, TouchableOpacity, TouchableHighlight } from 'react-native';
import { TextInput } from 'react-native-paper';
import Joi from 'joi-browser';

import { connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import styles from './styles/styles'
import { loginUser } from '../../actions/authActions';


function mapStateToProps(state) {
    return {
        auth: state.auth,
        errors: state.errors,
    };
}

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [errors, setErorrs] = useState({});

    const navigation = useNavigation();

    React.useEffect(() => {
        if (props.auth.user._id) {
            navigation.navigate("Menu", { data: props.auth.user })
        }
        let errors = {};
        // console.log('props.errors ', props.errors);
        if (props.errors.message === 'user not found') {
            errors["email"] = "* Email not found";
        }
        if (props.errors.message === 'Password does not match') {
            errors["pass"] = "*Password does not match";
        }
        setErorrs(errors);
        return;
    }, [props.errors, props.auth.user])


    const joiSchema = {
        email: Joi.string().email().required(),
        pass: Joi.string().required(),
    }

    const onSubmit = () => {
        const userData = {
            email: email,
            pass: pass,
        };
        // console.log('userData', userData);
        let errors = {};

        //check valid form inputs
        const valid = Joi.validate(userData, joiSchema, {
            abortEarly: false
        });
        if (valid.error) {
            console.log('valid.error', valid.error);
            valid.error.details.forEach(err => {
                console.log(err.message);
                if (err.message === '"email" is not allowed to be empty') {
                    errors["email"] = "* Email is required.";
                }
                else if (err.message === '"email" must be a valid email') {
                    errors["email"] = "* Invalid Email";
                }
                if (err.message === '"pass" is not allowed to be empty') {
                    errors["pass"] = "* Password is required.";
                }
            })
            setErorrs(errors);
            return;
        }
        else {
            props.loginUser(userData);
        }
    }

    return (
        <ScrollView style={{ flex: 1, padding: 20 }}>
            <TextInput
                label="Email"
                style={styles.TextInput}
                autoCapitalize="none"
                onChangeText={(e) => setEmail(e)}
            />
            <Text style={styles.error}>{errors.email}</Text>

            <TextInput
                label="Password"
                secureTextEntry
                right={<TextInput.Icon name="eye" />}
                onChangeText={(e) => setPass(e)}
            />
            <Text style={styles.error}>{errors.pass}</Text>


            <TouchableOpacity
                style={styles.button}
                activeOpacity={0.6}
                underlayColor="#DDDDDD"
                onPress={onSubmit}
            >
                <Text style={styles.btnText} >Login</Text>
            </TouchableOpacity>

        </ScrollView >
    );
}

Login.propTypes = {
    auth: PropTypes.object,
    // errors: PropTypes.object
};


export default connect(mapStateToProps, { loginUser })(Login);

