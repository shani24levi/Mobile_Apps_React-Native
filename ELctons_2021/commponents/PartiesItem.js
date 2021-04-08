import React from 'react';
import { Image, TouchableOpacity, StyleSheet } from 'react-native';


const PartiesItem = (props) => {
    const { i, img, partiesPress } = props;

    return (
        <TouchableOpacity style={styles.padding} key={i} onPress={partiesPress}>
            <Image
                source={{
                    width: 150,
                    height: 150,
                    uri: img,
                }}
            ></Image>
        </TouchableOpacity>
    );
}
export default PartiesItem;

const styles = StyleSheet.create({
    padding: {
        padding: 15
    }
})