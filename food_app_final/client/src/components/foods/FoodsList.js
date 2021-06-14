import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Alert,
    ScrollView,
    FlatList,
} from 'react-native';
import FoodItem from './FoodItem';



const FoodsList = (props) => {
    const { tab_list } = props;

    return (
        <>
            <View style={styles.container}>
                <FlatList style={styles.list}
                    contentContainerStyle={styles.listContainer}
                    data={tab_list}
                    horizontal={false}
                    numColumns={2}
                    keyExtractor={(item) => {
                        return item._id;
                    }}
                    renderItem={({ item }) => {
                        return (
                            <FoodItem
                                key={item._id}
                                i={item._id}
                                title={item.title}
                                type={item.type}
                                amount={item.amount}
                                date={item.date}
                                discription={item.discription}
                                img={item.img}
                                user={item.user}
                            />
                        )
                    }} />
            </View>
        </>
    );
}

export default FoodsList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },
    list: {
        paddingHorizontal: 5,
    },
    listContainer: {
        alignItems: 'center'
    }
})