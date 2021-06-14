import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Alert,
    ScrollView,
    FlatList,
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import HeaderApp from '../Header';

function Profile(props) {

    let data = [
        { id: 1, title: "Option 1", image: "https://img.icons8.com/color/70/000000/cottage.png" },
        { id: 1, title: "Option 2", image: "https://img.icons8.com/color/70/000000/administrator-male.png" },
        { id: 2, title: "Option 3", image: "https://img.icons8.com/color/70/000000/filled-like.png" },
        { id: 3, title: "Option 4", image: "https://img.icons8.com/color/70/000000/facebook-like.png" },
        { id: 6, title: "Option 7", image: "https://img.icons8.com/dusk/70/000000/visual-game-boy.png" },
        { id: 8, title: "Option 8", image: "https://img.icons8.com/flat_round/70/000000/cow.png" },
        { id: 9, title: "Option 9", image: "https://img.icons8.com/color/70/000000/coworking.png" },
        { id: 9, title: "Option 10", image: "https://img.icons8.com/nolan/70/000000/job.png" },
    ]

    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#FF7F50', '#FA4A0C', '#FF7F50']}
                style={styles.header}
            />
            <View>
                 <HeaderApp backTo ="Home" />
                <View style={styles.headerContent}>
                    <Image style={styles.avatar} source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar2.png' }} />
                    <Text style={styles.name}>
                        John Doe
                </Text>
                </View>
            </View>

            <View style={styles.profileDetail}>
                <View style={styles.detailContent}>
                    <Text style={styles.title}>Photos</Text>
                    <Text style={styles.count}>200</Text>
                </View>
                <View style={styles.detailContent}>
                    <Text style={styles.title}>Followers</Text>
                    <Text style={styles.count}>200</Text>
                </View>
                <View style={styles.detailContent}>
                    <Text style={styles.title}>Following</Text>
                    <Text style={styles.count}>200</Text>
                </View>
            </View>

            <FlatList style={styles.list}
                contentContainerStyle={styles.listContainer}
                data={data}
                horizontal={false}
                numColumns={4}
                keyExtractor={(item) => {
                    return item.id;
                }}
                renderItem={({ item }) => {
                    return (
                        <View>
                            <TouchableOpacity style={styles.card} onPress={() => { console.log('hi') }}>
                                <Image style={styles.cardImage} source={{ uri: item.image }} />
                            </TouchableOpacity>

                            <View style={styles.cardHeader}>
                                <View style={{ alignItems: "center", justifyContent: "center" }}>
                                    <Text style={styles.title}>{item.title}</Text>
                                </View>
                            </View>
                        </View>
                    )
                }} />
            <ScrollView>
                    <View style={styles.body}>
                        <View style={styles.bodyContent}>
                            <TouchableOpacity style={styles.buttonContainer}>
                                <Text>Opcion 1</Text>
                            </TouchableOpacity>
                            <Text style={styles.description}>Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum electram expetendis, omittam deseruisse consequuntur ius an,</Text>
                        </View>
                    </View>
            </ScrollView>
        </View>
    );
}

export default Profile;

const styles = StyleSheet.create({
    header: {
        position: 'absolute',
        left: 0,
        right: 0,
        height: 220,
    },
    headerContent: {
        padding: 30,
        alignItems: 'center',
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom: 5,
    },
    name: {
        fontSize: 22,
        color: "#FFFFFF",
        fontWeight: '600',
    },
    profileDetail: {
        alignSelf: 'center',
        marginTop: 200,
        alignItems: 'center',
        flexDirection: 'row',
        position: 'absolute',
        backgroundColor: "#ffffff"
    },
    detailContent: {
        margin: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        color: "#FA4A0C"
    },
    count: {
        fontSize: 18,
    },
    bodyContent: {
        flex: 1,
        alignItems: 'center',
        padding: 30,
        marginTop: 40
    },
    textInfo: {
        fontSize: 18,
        marginTop: 20,
        color: "#696969",
    },
    buttonContainer: {
        marginTop: 10,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 30,
        backgroundColor: "#FA4A0C",
    },
    description: {
        fontSize: 20,
        color: "#FA4A0C",
        marginTop: 10,
        textAlign: 'center'
    },

    // list cards of circels

    list: {
        paddingHorizontal: 5,
        marginTop: 50
    },
    listContainer: {
        alignItems: 'center'
    },
    /******** card **************/
    card: {
        shadowColor: '#474747',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,
        marginHorizontal: 10,
        backgroundColor: "#e2e2e2",
        //flexBasis: '42%',
        width: 80,
        height: 80,
        borderRadius: 60,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cardHeader: {
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
    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 12.5,
        paddingBottom: 25,
        paddingHorizontal: 16,
        borderBottomLeftRadius: 1,
        borderBottomRightRadius: 1,
    },
    cardImage: {
        height: 50,
        width: 50,
        alignSelf: 'center'
    },
    title: {
        fontSize: 18,
        flex: 1,
        alignSelf: 'center',
        color: "#696969"
    },
    // list: {
    //     paddingHorizontal: 4,
    //     marginTop: 50
    //   },
    //   listContainer:{
    //     alignItems:'center'
    //   },
    //   card:{
    //     shadowColor: '#474747',
    //     shadowOffset: {
    //       width: 0,
    //       height: 4,
    //     },
    //     shadowOpacity: 0.37,
    //     shadowRadius: 7.49,

    //     elevation: 12,
    //     marginVertical: 5,
    //     marginHorizontal: 5,
    //     backgroundColor:"#e2e2e2",
    //     //flexBasis: '42%',
    //     width:80,
    //     height:80,
    //     borderRadius:60,
    //     alignItems:'center',
    //     justifyContent:'center'
    //   },
    //   cardHeader: {
    //     paddingVertical: 17,
    //     paddingHorizontal: 16,
    //     borderTopLeftRadius: 1,
    //     borderTopRightRadius: 1,
    //     flexDirection: 'row',
    //     alignItems:"center", 
    //     justifyContent:"center"
    //   },
    //   cardContent: {
    //     paddingVertical: 12.5,
    //     paddingHorizontal: 16,
    //   },
    //   cardFooter:{
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    //     paddingTop: 12.5,
    //     paddingBottom: 25,
    //     paddingHorizontal: 16,
    //     borderBottomLeftRadius: 1,
    //     borderBottomRightRadius: 1,
    //   },
    //   cardImage:{
    //     height: 50,
    //     width: 50,
    //     alignSelf:'center'
    //   },
    //   title:{
    //     fontSize:18,
    //     flex:1,
    //     alignSelf:'center',
    //     color:"#696969"
    //   },
});