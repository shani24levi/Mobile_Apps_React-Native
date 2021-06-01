import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, ActivityIndicator, Text, TouchableOpacity, } from 'react-native';
import { Header } from 'react-native-elements'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const HeaderApp = (props) => {
    const navigation = useNavigation();

    return (
        //     <Header  onPress={() => navigation.navigate('Menu')}
        //     leftComponent={{ icon: 'menu', color: '#000'}}
        //     centerComponent={{ text: 'FooDelicious', style: { color: '#fff' } }}
        //     rightComponent={{ icon: 'home', color: '#fff' }}
        //   />
        <View >
            <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
                <Icon name="menu" size={30} color="#000" style={{ marginLeft: 15 }} />
            </TouchableOpacity>        
            </View>

    );
}

export default HeaderApp;


const styles = StyleSheet.create({
    header: {
        width: '100%',
        backgroundColor: '#eee',
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
