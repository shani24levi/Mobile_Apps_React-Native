import React from 'react';
import { StyleSheet, View, Text } from 'react-native';


function PartiesVoteItem(props) {
    const { name, amount } = props;

    return (
        <View style={styles.item} key={name}>
            <Text style={styles.textName}>Party: {name}</Text>
            <Text style={styles.textAmount}>Vote:  {amount}</Text>
        </View>
    );
}

export default PartiesVoteItem;

const styles = StyleSheet.create({
    item: {
        marginTop: 10,
        padding: 30,
        backgroundColor: '#F8F8FF',
    },
    textName: {
        fontSize: 15
    },
    textAmount: {
        color: '#696969'
    }
})