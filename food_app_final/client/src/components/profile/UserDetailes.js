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
import MyFood from './MyFood';
import MyInfo from './MyInfo';
import SettingProfile from './SettingProfile';
import styles from './style'

function UserDetailes(props) {
    const { view, user_id, changeView } = props;
    return (
        <ScrollView style={styles.body}>
            {
                view == 'info'
                    ?
                    <MyInfo />
                    :
                    <>
                        {
                            view == 'edit'
                                ?
                                <SettingProfile view={view} changeView={changeView} />
                                :
                                <MyFood />
                        }
                    </>

            }
        </ScrollView>
    );
}

export default UserDetailes;