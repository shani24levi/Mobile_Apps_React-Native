import React from 'react';
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
import styles from './style'

import { LinearGradient } from 'expo-linear-gradient';
import HeaderApp from '../Header';

function HeaderProfile(props) {
    const { user } = props;
    return (
        <>
            <LinearGradient
                colors={['#FF7F50', '#FA4A0C', '#FF7F50']}
                style={styles.header}
            />
            <View>
                <HeaderApp backTo="Home" />
                <View style={styles.headerContent}>
                    <Image
                        source={{
                            uri: user.avatar != undefined ? `https:${user.avatar}` : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_yQNApJkRMrztokLbDY6k1gDdsdv8XlSDGA&usqp=CAU',
                        }}
                        style={styles.avatar}
                    />
                    <Text style={styles.name}>
                        {user.user}
                    </Text>
                </View>
            </View>
        </>
    );
}

export default HeaderProfile;