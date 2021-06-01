import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const ListOfSearches = (props) => {
    const { lastSearches } = props;

    return (
        <View style={styles.contoner}>
            {
                lastSearches.length ?
                    <>
                        {
                            lastSearches.map((item, i) => {
                                return (
                                    <View style={styles.item} key={i}>
                                        <Text style={styles.textName}> {i + 1}. {item}</Text>
                                    </View>
                                );
                            })
                        }
                    </>
                    :
                    <Text style={styles.notFounf}>No previous searches found</Text>

            }
        </View>
    );
}
export default ListOfSearches;

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
    },
    notFounf: {
        padding: 20,
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold'
    }
})
