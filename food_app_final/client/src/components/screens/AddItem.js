import React, { useState } from 'react';
import { StyleSheet, Text, Alert, TouchableOpacity, Image, SafeAreaView, ScrollView, View, useWindowDimensions } from 'react-native';
// import { Input, CheckBox } from 'react-native-elements';
import HeaderApp from '../Header';
import { Checkbox, RadioButton, TextInput } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';

import PropTypes from 'prop-types';
import Joi from 'joi-browser';

import { connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { addFoodItem } from '../../actions/foodActions';



function mapStateToProps(state) {
    return {
        auth: state.auth,
        foods: state.foods,
        errors: state.errors,
    };
}
function AddItem(props) {
    const [checked, setChecked] = React.useState('snacks');
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [discription, setDiscription] = useState('');
    const [img, setImg] = useState('');
    const [errors, setErorrs] = useState({});
    const navigation = useNavigation();

    let openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (permissionResult.granted === false) {
            alert("Permission to access camera roll is required!");
            return;
        }
        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        console.log(pickerResult);
        setImg(pickerResult.uri)
    }

    
    const joiSchema = {
        // user: Joi.any(),
        type: Joi.string().required(),
        title: Joi.string().required(),
        description: Joi.string(),
        amount: Joi.string().required(),
        img: Joi.any(),
    }

    const onSubmit = () => {
        console.log('props.auth.user._id', props.auth.user._id);
        const userData = {
            // user: props.auth.user._id,
            type: checked,
            title: title,
            description: discription,
            amount: amount,
            img: img
        };

        console.log('userData', userData);
        let errors = {};

        //check valid form inputs
        const valid = Joi.validate(userData, joiSchema, {
            abortEarly: false
        });
        if (valid.error) {
            console.log('valid.error', valid.error);
            valid.error.details.forEach(err => {
                console.log(err.message);
                if (err.message === '"title" is not allowed to be empty') {
                    errors["title"] = "* title is required.";
                }
                else if (err.message === '"type"" is not allowed to be empty') {
                    errors["type"] = "* type is required";
                }
                if (err.message === '"amount" is not allowed to be empty') {
                    errors["amount"] = "* amount is required.";
                }
                if (err.message === '"description" is not allowed to be empty') {
                    errors["description"] = "* description is required.";
                }
                if (err.message === '"img"  is required') {
                    errors["img"] = "* img is required.";
                }
            })
            setErorrs(errors);
            return;
        }
        else {
            props.addFoodItem(props.auth.token, userData);
            navigation.navigate("Home")
        }

    }

    return (
        <>
            <HeaderApp backTo="Home" />
            <View style={styles.container}>
                <Text style={styles.title}>Add Donation</Text>
            </View>
            <ScrollView style={{ flex: 1, padding: 20 }}>
                <TextInput
                    label="Titel"
                    style={styles.TextInput}
                    autoCapitalize="none"
                    onChangeText={(e) => setTitle(e)}
                />
                <Text style={styles.error}>{errors.title}</Text>

                <Text style={styles.title2}>Type of:</Text>
                <View style={styles.buttons}>
                    <RadioButton
                        value="snacks"
                        status={checked === 'snacks' ? 'checked' : 'unchecked'}
                        color="#FA4A0C"
                        onPress={() => setChecked('snacks')}
                    />
                    <Text style={styles.sub_title}> Snack </Text>

                    <RadioButton
                        value="drinks"
                        status={checked === 'drinks' ? 'checked' : 'unchecked'}
                        color="#FA4A0C"
                        onPress={() => setChecked('drinks')}
                    />
                    <Text style={styles.sub_title}> Drink </Text>

                    <RadioButton
                        value="dairies"
                        status={checked === 'dairies' ? 'checked' : 'unchecked'}
                        color="#FA4A0C"
                        onPress={() => setChecked('dairies')}
                    />
                    <Text style={styles.sub_title}> Dairy </Text>

                    <RadioButton
                        value="meats"
                        status={checked === 'meats' ? 'checked' : 'unchecked'}
                        color="#FA4A0C"
                        onPress={() => setChecked('meats')}
                    />
                    <Text style={styles.sub_title}> Meat </Text>
                </View>
                <Text style={styles.error}>{errors.type}</Text>

                <TextInput
                    label="amount"
                    style={styles.TextInput}
                    autoCapitalize="none"
                    onChangeText={(e) => setAmount(e)}
                />
                <Text style={styles.error}>{errors.amount}</Text>


                <TextInput
                    label="Discription"
                    style={styles.TextInput}
                    autoCapitalize="none"
                    onChangeText={(e) => setDiscription(e)}
                />
                <Text style={styles.error}>{errors.description}</Text>



                <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
                    <Text style={styles.buttonText}>Pick a photo</Text>
                </TouchableOpacity>
                <Text style={styles.error}>{errors.img}</Text>


                <TouchableOpacity
                    style={styles.buttonSubmit}
                    activeOpacity={0.6}
                    underlayColor="#DDDDDD"
                    onPress={onSubmit}
                >
                    <Text style={styles.btnText} >Add</Text>
                </TouchableOpacity>
            </ScrollView>
        </>
    );
}

AddItem.propTypes = {
    auth: PropTypes.object,
    errors: PropTypes.object,
    foods: PropTypes.object
};
export default connect(mapStateToProps, { addFoodItem })(AddItem);


const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        alignItems: 'center',
    },
    title: {
        fontWeight: 'bold',
        color: '#000',
        fontSize: 25,
        padding: 20,
        paddingBottom: 0
    },
    title2: {
        fontWeight: 'bold',
        color: '#000',
        fontSize: 15,
        padding: 5,
    },
    buttonSubmit: {
        backgroundColor: "#FA4A0C",
        padding: 15,
        borderRadius: 50,
        alignItems: "center",
        marginTop: 15
    },
    btnText: {
        color: "#fff",
        fontSize: 20,
        justifyContent: "center",
        textAlign: "center",
    },
    sub_title: {
        color: '#000',
        padding: 5,
        paddingTop: 10,
    },
    buttons: {
        flexDirection: 'row',
        paddingBottom: 10
    },
    error: {
        color: '#8B0000'
    },
    TextInput: {
        paddingLeft: 10,
        marginTop: 5,
        marginBottom: 10,
    },
    instructions: {
        color: '#888',
        fontSize: 18,
        marginHorizontal: 15,
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#eee',
        padding: 20,
        borderRadius: 5,
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 20,
        color: '#000',
    },
    thumbnail: {
        width: 300,
        height: 300,
        resizeMode: 'contain',
    },
});