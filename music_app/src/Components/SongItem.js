import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const SongItem = (props) => {
    const { i, title, play_count, artist, image, play_song, soundPlayingClick } = props;
    const PLAYING = 'https://mpng.subpng.com/20180920/oot/kisspng-forgegames-product-design-translation-ai-factory-l-5ba3e8fe465062.725266121537468670288.jpg';
    const [playing, setPlayingByID] = useState(0);

    const playSound = async () => {
        //set for user view 
        setPlayingByID(i);
        soundPlayingClick();
    };

    return (
        <TouchableOpacity style={styles.container} key={i} onPress={playSound}>
            <Image style={styles.img} source={{ uri: image === null ? PLAYING : image }}></Image>

            {/* display a play action on click */}
            {
                playing === i ?
                    <View style={styles.playing} >
                        <Icon name="play" size={40} color="green" />
                    </View>
                    :
                    <></>
            }

            <View style={styles.content}>
                <View style={styles.information}>
                    <Text size={25}>Title: <Text style={{ color: 'green', fontSize: 15, fontWeight: 'bold' }}>{title}</Text></Text>
                    <Text numberOfLines={1} style={styles.space}>Artist: {artist}</Text>
                    <Text numberOfLines={1} > <Text style={{ fontWeight: 'bold' }}>Play count:</Text>  {play_count}</Text>
                </View>
            </View>
        </TouchableOpacity >
    );
}
export default SongItem;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 100,
        flexDirection: 'row',
        paddingHorizontal: 20,
        margin: 10,
    },
    img: {
        width: 100,
        height: 100,
        borderRadius: 50 / 2,
    },
    playing: {
        justifyContent: 'center',
        alignItems: 'center',
        //position: 'absolute',
    },
    content: { //line 
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 0.5,
        marginLeft: 20,
        paddingVertical: 10,
    },
    information: {
        flex: 1,
        paddingRight: 10,
    },
    space: {
        paddingTop: 10,
    },
})