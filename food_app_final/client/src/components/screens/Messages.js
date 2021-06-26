import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Alert,
  Image,
  FlatList,
  TouchableOpacity, ScrollView
} from 'react-native';
import HeaderApp from '../Header';
import Loading from '../Loading';


import PropTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';
import { getAllRequstsOfUser, deleteId } from '../../actions/requestsActions';
import MessagItem from '../massages/MessagItem';




function mapStateToProps(state) {
  return {
    auth: state.auth,
    requests: state.requests,
  };
}

function Messages(props) {
  const [user_requests, setRequests] = useState([]);

  React.useEffect(() => {
    setRequests(props.requests.user_requests)
  }, [props.requests.user_requests])

  React.useEffect(() => {
    props.getAllRequstsOfUser(props.auth.token);
  }, [])

  const clickDelete = (deleteId) => {
    console.log(deleteId);
    //delet from server 
    props.deleteId(props.auth.token, deleteId);
    //set state:
    setRequests(user_requests => user_requests.filter(({ _id }) => _id !== deleteId));
    return;

  }
  const clickOk = (id) => {
    console.log(id);
  }

  console.log('58 user_requests', user_requests);


  return (
    <>
      <HeaderApp backTo="Home" />
      <View style={styles.container}>
        {
          props.requests.loading ?
            <Loading />
            :
            <View style={styles.container}>
              {
                user_requests.length > 0 ?
                  <View style={styles.container}>
                    {
                      user_requests.map(i => {
                        return (
                          <MessagItem
                            i={i._id} key={i._id} approved={i.approved} date={i.date} food={i.food} receiver={i.receiver} sender={i.sender}
                            clickDelete={clickDelete}
                            clickOk={clickOk}
                          />
                        );
                      })
                    }
                  </View>
                  :
                  <Text>No Items </Text>

              }
            </View>

        }</View>
    </>
  );
}

Messages.propTypes = {
  auth: PropTypes.object,
  requests: PropTypes.object
};
export default connect(mapStateToProps, { getAllRequstsOfUser, deleteId })(Messages);


const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
  box: {
    padding: 20,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  boxContent: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: 10,
  },
  title: {
    fontSize: 18,
    color: "#151515",
  },
  description: {
    fontSize: 15,
    color: "#646464",
  },
  buttons: {
    flexDirection: 'row',
  },
  button: {
    height: 35,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    width: 50,
    marginRight: 5,
    marginTop: 5,
  },
  icon: {
    width: 20,
    height: 20,
  },
  view: {
    backgroundColor: "#eee",
  },
  profile: {
    backgroundColor: "#1E90FF",
  },
  message: {
    backgroundColor: "#228B22",
  },
});