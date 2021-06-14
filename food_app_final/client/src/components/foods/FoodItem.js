import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
  } from 'react-native';

import { useNavigation } from '@react-navigation/native';


const FoodItem = (props) => {
    const { i, title, type, amount, date, discription, img, user } = props;
    const navigation = useNavigation();

    return (
        <TouchableOpacity style={styles.card} onPress={(()=>navigation.navigate("FoodDetails", { user: props }))}>
        <View style={styles.cardHeader}>
            <Image style={styles.icon} source={{ uri: "https://img.icons8.com/flat_round/64/000000/hearts.png" }} />
        </View>
        <Image style={styles.userImage} source={{ uri: img }} />
        <View style={styles.cardFooter}>
            <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Text style={styles.name}>{title}</Text>
                <Text style={styles.position}>{type}</Text>
                <TouchableOpacity style={styles.followButton}  onPress={(()=>navigation.navigate("foodDetails", { user: props }))}>
                    <Text style={styles.followButtonText}>View</Text>
                </TouchableOpacity>
            </View>
        </View>
    </TouchableOpacity>
    );
}
export default FoodItem;

const styles = StyleSheet.create({
    card: {
        alignItems: 'center',
        borderRadius:30,
        shadowColor: '#00000021',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,

        marginVertical: 5,
        backgroundColor: "white",
        flexBasis: '46%',
        marginHorizontal: 5,
    },
    cardFooter: {
        paddingVertical: 17,
        paddingHorizontal: 16,
        borderTopLeftRadius: 1,
        borderTopRightRadius: 1,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center"
    },
    cardContent: {
        paddingVertical: 12.5,
        paddingHorizontal: 16,
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 12.5,
        paddingBottom: 25,
        paddingHorizontal: 16,
        borderBottomLeftRadius: 1,
        borderBottomRightRadius: 1,
    },
    userImage: {
        height: 120,
        width: 120,
        borderRadius: 60,
        alignSelf: 'center',
        borderColor: "#DCDCDC",
        borderWidth: 3,
    },
    name: {
        fontSize: 18,
        flex: 1,
        alignSelf: 'center',
        color: "#008080",
        fontWeight: 'bold'
    },
    position: {
        fontSize: 14,
        flex: 1,
        alignSelf: 'center',
        color: "#696969"
    },
    followButton: {
        marginTop: 10,
        height: 35,
        width: 100,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor: "#FA4A0C",
    },
    followButtonText: {
        color: "#FFFFFF",
        fontSize: 20,
    },
    icon: {
        height: 20,
        width: 20,
    },

    // body: {
    //     padding: 5,
    //     alignItems: 'center',
    //     position: 'relative',
    // },
    // card: {
    //     backgroundColor: '#fff',
    //     position: 'relative',
    //     top: '-25',
    // }
})