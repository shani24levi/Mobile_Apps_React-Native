import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Alert,
    ScrollView,
    FlatList,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../profile/style'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { getProfile } from '../../actions/profileActions';
import { getFoodsOfUser } from '../../actions/foodActions';


import HeaderProfile from '../profile/HeaderProfile';
import ButtonsCircels from '../profile/ButtonsCircels';
import UserDetailes from '../profile/UserDetailes';
import Loading from '../Loading';


function mapStateToProps(state) {
    return {
        auth: state.auth,
        profile: state.profile,
        foods: state.foods
    };
}

function Profile(props) {
    const [view, setView] = useState('info');
    const [createProfile, setProfileCreate] = useState(false);

    React.useEffect(() => {
        if (props.profile.profile._id == undefined) {
            setView('edit')
            setProfileCreate(true)
        }
        else {
            setView('info')
            setProfileCreate(false)
        }
    }, [props.profile.profile._id])


    React.useEffect(() => {
        isToken();
        props.getFoodsOfUser(props.auth.token);
        return;
    }, [])

    const isToken = async () => {
        const value = await AsyncStorage.getItem('token');
        if (value == null) {
            console.log('null null');
        }
        else {
            props.getProfile(value);
        }
    }

    const changeView = (view) => {
        setView(view)
    }

    return (
        <View style={styles.container}>
            <HeaderProfile user={props.auth.user} />
            <ButtonsCircels changeView={changeView} />
            {
                props.profile.loading ?
                    <Loading /> :
                    <UserDetailes view={view} changeView={changeView} user_id={props.auth.user._id} />
            }
        </View>
    );
}
Profile.propTypes = {
    auth: PropTypes.object,
    foods: PropTypes.object
};
export default connect(mapStateToProps, { getProfile, getFoodsOfUser })(Profile);

