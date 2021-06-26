import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View, TouchableOpacity, KeyboardAvoidingView, Keyboard } from 'react-native';
import { TextInput } from 'react-native-paper';
import Joi from 'joi-browser';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './style';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile , editProfile } from '../../actions/profileActions';


function mapStateToProps(state) {
    return {
        auth: state.auth,
        profile: state.profile,
    };
}


function SettingProfile(props) {
    const { view ,changeView } = props;

    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [street, setStreet] = useState('');
    const [street_number, setNumber] = useState('');
    const [phone, setPhone] = useState('');
    const [errors, setErorrs] = useState({});

    React.useEffect(() => {
        if(props.profile.profile.country != undefined)  setCountry(props.profile.profile.city)
        if(props.profile.profile.city != undefined) setCity(props.profile.profile.city)
        if(props.profile.profile.street != undefined) setStreet(props.profile.profile.street)
        if(props.profile.profile.street_number != undefined) setNumber(props.profile.profile.street_number)
        if(props.profile.profile.phone != undefined) setPhone(props.profile.profile.phone)
  
        Keyboard.addListener('keyboardWillShow', () => {

        })
        return () => {
            Keyboard.removeAllListeners('keyboardWillShow')
        }
    }, [])

    const joiSchema = {
        country: Joi.string().min(2).required(),
        city: Joi.string().min(2).required(),
        street: Joi.string().min(2).required(),
        street_number: Joi.any().required(),
        phone: Joi.any(),
    }

    const onSubmit = async () => {
        const value = await AsyncStorage.getItem('token');
        const userData = {
            // user: props.auth.user._id,
            country: country,
            city: city,
            street: street,
            street_number: street_number,
            phone: phone,
        };
        console.log('userData', userData);
        let errors = {};

        //check valid form inputs
        const valid = Joi.validate(userData, joiSchema, {
            abortEarly: false
        });
        if (valid.error) {
            valid.error.details.forEach(err => {
                console.log(err.message);
                if (err.message === '"country" length must be at least 2 characters long') {
                    errors["country"] = "* Too short";
                }
                if (err.message === '"country" is not allowed to be empty') {
                    errors["country"] = "* country is required.";
                }
                if (err.message === '"city" is not allowed to be empty') {
                    errors["city"] = "* city is required.";
                }
                else if (err.message === '"city" length must be at least 2 characters long') {
                    errors["city"] = "* Too short";
                }
                if (err.message === '"street" length must be at least 2 characters long') {
                    errors["street"] = "* Too short";
                }
                if (err.message === '"street" is not allowed to be empty') {
                    errors["street"] = "* street is required.";
                }
                if (err.message === '"street_number" is not allowed to be empty') {
                    errors["street_number"] = "* street_number is required.";
                }
                if (err.message === '"phone" is not allowed to be empty') {
                    errors["phone"] = "* street_number is required.";
                }
            })
            setErorrs(errors);
            return;
        }
        else {
            if(props.profile.is_profile) {
                props.createProfile(value, userData);
                changeView('info')
            }
            else {
                console.log('edite');
                props.editProfile(value, userData);
                changeView('info')
            }
        }
    }

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior="padding"
            enabled={true}
        >
            <ScrollView style={{ flex: 1, padding: 20 }}>
                <TextInput
                    label="country"
                    style={styles.TextInput}
                    autoCapitalize="none"
                    value= {country}
                    onChangeText={(e) => setCountry(e)}
                />
                <Text style={styles.error}>{errors.country}</Text>

                <TextInput
                    label="city"
                    style={styles.TextInput}
                    autoCapitalize="none"
                    value= {city}
                    onChangeText={(e) => setCity(e)}
                />
                <Text style={styles.error}>{errors.city}</Text>

                <TextInput
                    label="street"
                    style={styles.TextInput}
                    autoCapitalize="none"
                    value= {street}

                    onChangeText={(e) => setStreet(e)}
                />
                <Text style={styles.error}>{errors.street}</Text>

                <TextInput
                    label="street number"
                    style={styles.TextInput}
                    autoCapitalize="none"
                    value= {street_number}

                    onChangeText={(e) => setNumber(e)}
                />
                <Text style={styles.error}>{errors.street_number}</Text>

                <TextInput
                    label="phone"
                    style={styles.TextInput}
                    autoCapitalize="none"
                    value= {phone}
                    onChangeText={(e) => setPhone(e)}
                />
                <Text style={styles.error}>{errors.phone}</Text>


                <TouchableOpacity
                    style={styles.button}
                    activeOpacity={0.6}
                    underlayColor="#DDDDDD"
                    onPress={onSubmit}
                >
                    <Text style={styles.btnText} >Submit</Text>
                </TouchableOpacity>

                <View style={{height:200}}/>
            </ScrollView >
        </KeyboardAvoidingView>
    );
}
SettingProfile.propTypes = {
    auth: PropTypes.object,
    profile: PropTypes.object,
    // errors: PropTypes.object
};
export default connect(mapStateToProps, { createProfile, editProfile })(SettingProfile);

