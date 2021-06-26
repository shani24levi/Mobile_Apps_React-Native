import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    FlatList,
    Dimensions,
    Alert,
    ScrollView
} from 'react-native';
import MyFoodItem from './MyFoodItem';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getFoodsOfUser, deleteFoodById } from '../../actions/foodActions';
import Loading from '../Loading';


function mapStateToProps(state) {

    return {
        auth: state.auth,
        foods: state.foods,
    };
}


function MyFood(props) {
    const [user_food, setUserFood] = useState([]);


    React.useEffect(() => {
        setUserFood(props.foods.user_food)
    }, [])

    const clickDelete = (deleteId) => {
        console.log(deleteId);
        props.deleteFoodById(props.auth.token, deleteId);

        //set state
        setUserFood(user_food => user_food.filter(({ _id }) => _id !== deleteId));
        return;
    }


    const clickOk = (id) => {
        console.log(id);
    }


    return (
        <>
            {
                props.foods.loading ?
                    <Loading />
                    :
                    <ScrollView style={styles.container}>
                        {
                            user_food.length > 0 ?
                                <ScrollView style={styles.container}>
                                    {
                                        user_food.map(i => {
                                            return (
                                                <MyFoodItem key={i._id} i={i._id} amount={i.amount} avilibal={i.avilibal} description={i.description} title={i.title} img={i.img} date={i.date}
                                                    clickDelete={clickDelete}
                                                    clickOk={clickOk} />
                                            );
                                        })
                                    }
                                </ScrollView>
                                :
                                <Text>No Items </Text>

                        }
                    </ScrollView>

            }
        </>
    );
}

MyFood.propTypes = {
    auth: PropTypes.object,
    profile: PropTypes.object,
};
export default connect(mapStateToProps, { getFoodsOfUser, deleteFoodById })(MyFood);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
