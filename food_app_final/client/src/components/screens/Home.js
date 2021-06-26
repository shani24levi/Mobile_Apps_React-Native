import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, Image, SafeAreaView, ScrollView, View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import PropTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';
import { getProfile } from '../../actions/profileActions';
import { getAllRequstsOfUser } from '../../actions/requestsActions';


import SearchBarApp from '../SearchBarApp';
import TabsViewHome from '../TabsViewHome';

function mapStateToProps(state) {
    return {
        auth: state.auth,
        ptofile: state.profile,
        requests: state.requests,
    };
}

const Home = (props) => {
    const [my_search, setSearch] = React.useState('');

    const onPressSearch = (search) => {
        setSearch(search.toLowerCase());
    };

    React.useEffect(() => {
        // user can select an item only if he has profile
        // there for call to profile of user in the home screen
        props.getProfile(props.auth.token);

    }, [])

    return (
        <>
            <SafeAreaView style={styles.body}>
                <Text numberOfLines={1} style={styles.title}> Delicious Food For You</Text>
                <SearchBarApp onPressSearch={onPressSearch} />
                <TabsViewHome search={my_search} />
            </SafeAreaView >
        </>
    );
}

Home.propTypes = {
    auth: PropTypes.object,
    ptofile: PropTypes.object,
    requests: PropTypes.object
};
export default connect(mapStateToProps, { getProfile, getAllRequstsOfUser })(Home);



const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#EFEEEE',
    },
    title: {
        fontWeight: 'bold',
        color: '#000',
        fontSize: 25,
        padding: 20,
        paddingBottom: 0
    },
})