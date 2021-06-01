import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import PropTypes, { array } from 'prop-types';
import Joi from 'joi-browser';
import { connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import styles from './styles/styles'
import { registerUser } from '../../actions/authActions';


function mapStateToProps(state) {
    return {
        auth: state.auth,
        errors: state.errors,
    };
}


const SignIn = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [user, setUsername] = useState('');
    const [errors, setErorrs] = useState({});

    const navigation = useNavigation();

    React.useEffect(() => {
        let errors = {};
        console.log('props.errors', props.errors);
        if (props.errors.message === 'user already in system ') {
            errors["email"] = "*email already in system ";
        }
        if (props.errors.message === '"user" length must be at least 2 characters long') {
            errors["user"] = "*Too short";
        }
        setErorrs(errors);
        return;
    }, [props.errors])

    const joiSchema = {
        email: Joi.string().email().required(),
        pass: Joi.string().required(),
        user: Joi.string().required(),
    }

    const onSubmit = () => {
        const newUser = {
            user: user,
            email: email,
            pass: pass,
        };
        console.log('newUser', newUser);
        let errors = {};

        //check valid form inputs
        const valid = Joi.validate(newUser, joiSchema, {
            abortEarly: false
        });

        if (valid.error) {
            valid.error.details.forEach(err => {
                console.log(err.message);
                if (err.message === '"email" must be a valid email') {
                    errors["email"] = "* Invalid Email";
                }
                else if (err.message === '"email" is not allowed to be empty') {
                    errors["email"] = "* Email is required.";
                }
                if (err.message === '"pass" is not allowed to be empty') {
                    errors["pass"] = "* Password is required.";
                }
                if (err.message === '"user" is not allowed to be empty') {
                    errors["user"] = "* UserName is required.";
                }
            })
            setErorrs(errors);
            return;
        }
        else {
            props.registerUser(newUser);
            // console.log(my_user);
            // if(my_user)
            //      navigation.navigate('FooDelicious')
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
                label="User Name"
                style={styles.TextInput}
                autoCapitalize="none"
                onChangeText={(e) => setUsername(e)}
            />
            <Text style={styles.error}>{errors.user}</Text>

            <TextInput
                label="Password"
                //secureTextEntry
                // right={<TextInput.Icon name="eye"/>}
                onChangeText={(e) => setPass(e)}
            />
            <Text style={styles.error}>{errors.pass}</Text>

            <TouchableOpacity
                style={styles.button}
                activeOpacity={0.6}
                underlayColor="#DDDDDD"
                onPress={onSubmit}
            >
                <Text style={styles.btnText} >Sign IN</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

SignIn.propTypes = {
    auth: PropTypes.object,
    errors: PropTypes.object
};

export default connect(mapStateToProps, { registerUser })(SignIn);




