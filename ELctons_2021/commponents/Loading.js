import React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';

const Loading = () => {
    return (
        <View style={styles.contoner}>
            <ActivityIndicator size="large" color="#ff000" />
        </View>
    );
}
export default Loading;

const styles = StyleSheet.create({
    contoner: {
        flex: 1,
        justifyContent: 'center',
    }
})