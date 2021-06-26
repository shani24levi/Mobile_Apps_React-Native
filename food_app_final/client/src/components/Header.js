import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, SafeAreaView, TouchableOpacity, } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


function mapStateToProps(state) {
    return {
        auth: state.auth,
    };
}
const HeaderApp = (props) => {
    const navigation = useNavigation();
    const { backTo } = props


    const goBack = () => {
        navigation.navigate(`${backTo}`, { user: props.auth.user });
    }

    return (
        <SafeAreaView style={styles.header}>
            <TouchableOpacity onPress={goBack}>
                <Icon name="keyboard-backspace" size={40} style={styles.icon} />
            </TouchableOpacity>
        </SafeAreaView>

    );
}
HeaderApp.propTypes = {
    auth: PropTypes.object,
};
export default connect(mapStateToProps, null)(HeaderApp);


const styles = StyleSheet.create({
    header: {
        position: 'absolute',
    },
    icon: {
        marginLeft: 10,
        marginTop: 20,
        color: "#000"
    }
});
