import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Alert,
    ScrollView,
    FlatList,
    Button,
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { requstForFood } from '../../actions/requestsActions';



function mapStateToProps(state) {
    return {
        auth: state.auth,
        requests: state.requests,
        errors: state.errors,
    };
}
function ButtonPickUp(props) {
    const navigation = useNavigation();

    console.log('fffff', props.auth.token);

    const requstForFood = () => {
        props.requstForFood(props.auth.token, props.data)
        Alert.alert("Success", "The request is sent to the donor")
        navigation.navigate("Menu", { data: props.auth.user })
    }

    return (
        <TouchableOpacity style={styles.shareButton} onPress={() => requstForFood()}>
            <Text style={styles.shareButtonText}>Pick Up</Text>
        </TouchableOpacity>
    );
}

ButtonPickUp.propTypes = {
    auth: PropTypes.object,
    foods: PropTypes.object,
    errors: PropTypes.object

};
export default connect(mapStateToProps, { requstForFood })(ButtonPickUp);




const styles = StyleSheet.create({
    shareButton: {
        marginTop: 10,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor: "#FA4A0C",
    },
    shareButtonText: {
        color: "#FFFFFF",
        fontSize: 20,
    },
});
