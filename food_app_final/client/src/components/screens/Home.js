import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, Image, SafeAreaView, ScrollView, View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

import SearchBarApp from '../SearchBarApp';
import TabsViewHome from '../TabsViewHome';

import Footer from '../Footer';
import HeaderApp from '../Header';


const Home = (props) => {
    const [my_search, setSearch] = React.useState('');

    const onPressSearch = (search) => {
        setSearch(search.toLowerCase());
    };

    return (
        <>
            <SafeAreaView style={styles.body}>
                <Text numberOfLines={1} style={styles.title}> Delicious Food For You</Text>
                <SearchBarApp onPressSearch={onPressSearch} />
                <TabsViewHome search={my_search} />
                {/* <Foods /> */}

            </SafeAreaView >
            {/* <Footer /> */}
        </>
    );
}

export default Home;

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#EFEEEE',
        // padding: 20
    },
    title: {
        fontWeight: 'bold',
        color: '#000',
        fontSize: 25,
        padding: 20,
        paddingBottom: 0
        // fontFamily: Georgia
    },
})