import React from 'react';
import { StyleSheet, View, ActivityIndicator, } from 'react-native';

const Loading = () => {
    return (
        <View style={styles.continer}>
            <ActivityIndicator size="large" color="red" />
        </View>
    );
}
export default Loading;

const styles = StyleSheet.create({
    continer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent'
    }
});
