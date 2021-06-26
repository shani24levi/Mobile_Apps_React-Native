import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { getRequstsByFoodId } from '../../actions/requestsActions';
import Loading from '../Loading';
import RequsrtUserItem from './RequsrtUserItem';


function mapStateToProps(state) {
    return {
        requests: state.requests,
    };
}

function RequstedUsersList(props) {
    React.useEffect(() => {
        props.getRequstsByFoodId(props.food_id);
        return;
    }, [])

    return (
        <ScrollView>
            {
                props.requests.requests.food ?
                    <View style={styles.container}>
                        {
                            props.requests.requests.food.map((item) => {
                                return (<RequsrtUserItem
                                    key={item._id}
                                    id={item._id}
                                    img={item.sender.avatar}
                                    name={item.sender.name}
                                />);
                            })
                        }
                    </View>
                    :
                    <Loading />
            }
        </ScrollView>
    );
}

RequstedUsersList.propTypes = {
    requests: PropTypes.object,
};

export default connect(mapStateToProps, { getRequstsByFoodId })(RequstedUsersList);


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        marginHorizontal: 30,
        flexDirection: 'row',
        marginTop: 20
    },
});