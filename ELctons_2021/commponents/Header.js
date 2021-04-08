import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const Header = (props) => {
    const { goToPage, page } = props;

    return (
        <View style={styles.header}>
            <Text style={styles.text}>Israel Elections 2021</Text>
            {
                page == 'Home' ?
                    <Button title="Status" onPress={() => goToPage('Status')} />
                    :
                    <Button title="Home" onPress={() => goToPage('Home')} />
            }
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        height: 60,
        padding: 15,
        backgroundColor: '#00008B',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    text: {
        color: '#fff',
        fontSize: 23,
        textAlign: 'center'
    }
})

export default Header;