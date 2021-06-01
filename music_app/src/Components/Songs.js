import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import SongItem from './SongItem';


const Songs = (props) => {
    const { songs, search_query, soundPlayingClick } = props;

    return (
        <ScrollView>
            {
                songs.length > 0 ?
                    <View style={styles.contoner}>
                        {
                            songs.map((item) => {
                                return (<SongItem
                                    key={item.id}
                                    i={item.id}
                                    title={item.title}
                                    play_count={item.playback_count}
                                    artist={item.user.username}
                                    image={item.user.avatar_url}
                                    play_song={item.stream_url}
                                    soundPlayingClick={() => { soundPlayingClick(item.stream_url) }}

                                />);
                            })
                        }
                    </View>
                    :
                    <Text style={styles.notFounf}> <Text style={{ fontWeight: 'bold' }}>{search_query}</Text> Not Found</Text>
            }
        </ScrollView>
    );
}
export default Songs;


const styles = StyleSheet.create({
    contoner: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        alignContent: 'center'
    },
    notFounf: {
        padding: 20,
        fontSize: 20,
        textAlign: 'center',
    }

})