import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { getAvilibalsFoods,getAvilibalsType } from '../../actions/foodActions';
import FoodItem from './FoodItem';
import Loading from '../Loading';

function mapStateToProps(state) {
    return {
        foods: state.foods,
    };
}

const Foods = (props) => {
    const {tab_name} =props;
    console.log('tab_name', tab_name);
    React.useEffect(() => {
        if(tab_name === 'foods') props.getAvilibalsFoods();
        else if(tab_name === 'snacks') props.getAvilibalsType('snack');
    }, [])

    console.log(props.foods);

    return (
        <ScrollView>
            {
                props.foods.loading
                    ?
                    <Loading />
                    :
                    <>
                        {
                            props.foods.foods.length > 0 ?
                                <View style={styles.contoner}>
                                    {
                                        props.foods.foods.map((item) => {
                                            return (<FoodItem
                                                key={item._id}
                                                i={item._id}
                                                title={item.title}
                                                type={item.type}
                                                amount={item.amount}
                                                date={item.date}
                                                discription={item.discription}
                                                img={item.img}
                                                user={item.user}
                                            // soundPlayingClick={() => { soundPlayingClick(item.stream_url) }}
                                            />);
                                        })
                                    }
                                </View>
                                :
                                <Text style={styles.notFounf}> Not Found</Text>
                        }
                    </>

            }

        </ScrollView>
    );
}

Foods.propTypes = {
    foods: PropTypes.object,
};

export default connect(mapStateToProps, { getAvilibalsFoods ,getAvilibalsType})(Foods);

const styles = StyleSheet.create({
    contoner: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        alignContent: 'center'
    },
    notFounf: {
        padding: 20,
        fontSize: 20,
        textAlign: 'center',
    }

})