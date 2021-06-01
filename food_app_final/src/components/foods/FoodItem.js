import React from 'react';
import { Image, TouchableOpacity, StyleSheet, ScrollView, Text, View } from 'react-native';
import { Card, Button, Icon, Avatar } from 'react-native-elements'

const FoodItem = (props) => {
    const { i, title, type, amount, date, discription, img, user } = props;
    console.log(img);

    return (
        // onPress={foodPress}
        <TouchableOpacity style={styles.body} key={i} >
            <Avatar
                rounded
                size="xlarge"
                source={{
                    uri: img,
                }}
            />
        
            {/* <Text style={styles.card}>jjjgjgjgjgjgjgj</Text> */}
   

            <Card style={styles.card}>
                <Card.Title>{title}</Card.Title>
                <Text style={{ width: 110 }}>
                    The idea with React Native Elements is more about component structure than actual design.
    </Text>
            </Card>
        </TouchableOpacity>
    );
}
export default FoodItem;

const styles = StyleSheet.create({
    body: {
        padding: 5,
        alignItems: 'center',
        position: 'relative',
    },
    card: {
        backgroundColor: '#fff',
        position: 'relative',
        top: '-25',
        //marginTop: '-125',
        // border: 'solid rgb(98, 48, 145)',
        // borderRadius: '5%'
    }
})