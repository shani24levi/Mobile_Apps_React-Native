import React, { Component } from 'react';
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
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    profile: state.profile,
  };
}

function MyInfo(props) {
  return (
    <View style={styles.container}>
      <View style={styles.card} >
        <View style={styles.cardContent}>
          <Text style={styles.text}>country: {props.profile.profile.country}</Text>
          <Text style={styles.text}>city: {props.profile.profile.city}</Text>
          <Text style={styles.text}>street: {props.profile.profile.street}</Text>
          <Text style={styles.text}>street number: {props.profile.profile.street_number}</Text>
          <Text style={styles.text}>phone:  {props.profile.profile.phone}</Text>

          <TouchableOpacity style={styles.followButton} onPress={() => console.log('f')}>
            <Text style={styles.followButtonText}>See More</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
MyInfo.propTypes = {
  auth: PropTypes.object,
  profile: PropTypes.object,
};

export default connect(mapStateToProps, null)(MyInfo);


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentList: {
    flex: 1,

  },
  cardContent: {
    alignItems: 'center',
    flex: 1,
    marginLeft: 20,
    marginTop: 10,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 2,
    borderColor: "#ebf0f7"
  },

  card: {
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 0.49,
    elevation: 5,

    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    backgroundColor: "white",
    padding: 10,
    flexDirection: 'row',
    borderRadius: 30,
  },

  text: {
    fontSize: 20,
    flex: 1,
    alignSelf: 'center',
    color: "#FA4A0C",
    fontWeight: 'bold',
    padding: 5
  },
  count: {
    fontSize: 14,
    flex: 1,
    alignSelf: 'center',
    color: "#6666ff"
  },
  followButton: {
    marginTop: 10,
    height: 35,
    width: 100,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#dcdcdc",
  },
  followButtonText: {
    color: "#dcdcdc",
    fontSize: 12,
  },
});