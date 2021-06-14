import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, ActivityIndicator, Text, TouchableOpacity, } from 'react-native';
import { Header } from 'react-native-elements'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const HeaderApp = (props) => {
    const navigation = useNavigation();
    const {backTo} = props

    const goBack = () =>
    navigation.navigate(`${backTo}`, { user: props });

    return (
        //     <Header  onPress={() => navigation.navigate('Menu')}
        //     leftComponent={{ icon: 'arrow-back', color: '#000'}}
        //     centerComponent={{ text: 'FooDelicious', style: { color: '#fff' } }}
        //     rightComponent={{ icon: 'home', color: '#fff' }}
        //     style={{backgroundColor:'green'}}
        //   />
        <View style={styles.header}>
            <TouchableOpacity onPress={goBack}>
                <Icon name="keyboard-backspace" size={40} style={styles.icon} />
            </TouchableOpacity>
        </View>

    );
}
export default HeaderApp;


const styles = StyleSheet.create({
    header: {
        position: 'absolute',
    },
    icon: {
        marginLeft: 10,
        marginTop: 10,
        color: "#000"
    }
});
