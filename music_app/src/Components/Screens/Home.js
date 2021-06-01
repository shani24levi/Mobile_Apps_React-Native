import React, { useState } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';

const CLIENT_ID = 'CW62xLA9h8wXrXC1WIaSX9OWA6novVIE';
import { Audio } from 'expo-av';

import SearchBarApp from '../SearchBar';
import Songs from '../Songs';
import Loading from '../Loading';
import ButtonApp from '../ButtonApp';

import { setSearchQury, fatchSongsByQury } from '../../Redux/searchAction';

function mapStateToProps(state) {
    return {
        search_query: state.search.search_query,
        songs: state.search.songs,
        loading: state.search.loading,
        lastSearches: state.search.lastSearches,
    };
}

const Home = (props) => {
    const [welcom, setWelcom] = useState(true);

    const onPressSearch = userInput => {
        setWelcom(false);

        if (userInput != undefined) {
            //1. set the search input 
            props.setSearchQury(userInput);
            //2. search by name
            props.fatchSongsByQury(userInput);
        }
    }

    const soundPlaying = new Audio.Sound();
    const soundPlayingClick = async (play_song) => {
        await soundPlaying.unloadAsync();
        await soundPlaying.loadAsync({ uri: `${play_song}?client_id=${CLIENT_ID}` });
        await soundPlaying.playAsync();
    };

    //todo//
    const stopSound = async () => {
        console.log("heloo");
        await soundPlaying.unloadAsync();
    };

    return (
        <>
            <SearchBarApp onPressSearch={onPressSearch} />
            {
                welcom
                    ?
                    <View style={styles.container}>
                        <Text style={styles.welcome1}>hello ;) </Text>
                        <Text style={styles.welcome2}>Search For A Song</Text>
                    </View>
                    :
                    <>
                        {
                            props.loading
                                ?
                                <Loading />
                                :
                                <Songs songs={props.songs} search_query={props.search_query} soundPlayingClick={soundPlayingClick} />
                        }
                    </>
            }
            <ButtonApp />
            {/* <Button onPress={stopSound} title="dd"><ButtonApp /></Button> */}
        </>
    );
}
export default connect(mapStateToProps, { setSearchQury, fatchSongsByQury })(Home);

const styles = StyleSheet.create({
    container: {
        flex: 0.3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    welcome1: {
        fontSize: 40,
        textAlign: 'center',
        textTransform: 'uppercase',
        color: '#4CAF50',
    },
    welcome2: {
        fontSize: 30,
        textAlign: 'center',
    }
});


