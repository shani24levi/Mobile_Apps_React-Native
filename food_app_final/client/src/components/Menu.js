import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  Dimensions,
  Alert,
  Platform,
} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from "./screens/Home";
import Profile from "./screens/Profile";
import AuthPage from './screens/AuthPage';
import Messages from './screens/Messages';
import AddItem from './screens/AddItem';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


const NavigationDrawerStructure = (props) => {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };
  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={() => toggleDrawer()}>
        <Icon name="menu" size={30} color="#000" style={{ marginLeft: 15 }} />
        {/* <Icon name="bell" size={30} color="#000" style={{ justifyContent: 'flex-end' }} /> */}
      </TouchableOpacity>
    </View>
  );
};


function firstScreenStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: { backgroundColor: "#fff" },
          headerTintColor: "#000",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      />
    </Stack.Navigator>
  );
}

const removeValue = async () => {
  try {
    await AsyncStorage.removeItem('token')
    console.log('bey');

  } catch (e) {
    console.log(e);
  }
}

function logOut({ navigation }) {
  removeValue();
  return (
    <Stack.Navigator headerMode='none'>
      <Stack.Screen name="AuthPage" component={AuthPage} />
    </Stack.Navigator>
  );
}

const Menu = ({ navigation, route }) => {
  const user = route.params;
  // console.log('user.data.avatar' , user.data.avatar);
  return (
    <>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: '#FFA07A',
          itemStyle: { marginVertical: 5 },
        }}
      >
        <Drawer.Screen
          name="user"
          options={{
            drawerLabel: user.data.user != undefined ? user.data.user : 'Welcom',
            drawerIcon: (config) => (
              <Image
                source={{
                  uri: user.data.avatar != undefined ? `https:${user.data.avatar}` : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_yQNApJkRMrztokLbDY6k1gDdsdv8XlSDGA&usqp=CAU',
                }}
                style={{ width: 100, height: 100, borderRadius: 50 }}
              />
            ),
          }}
          component={firstScreenStack}
        />
        <Drawer.Screen
          name="Home"
          options={{
            drawerLabel: "Home",
            drawerIcon: (config) => (
              <Icon name="home" size={30} style={{ marginLeft: 5 }} />
            ),
          }}
          component={firstScreenStack}
        />
        <Drawer.Screen
          name="Profile"
          options={{
            drawerLabel: "Profile",
            drawerIcon: (config) => (
              <Icon name="face-profile" size={30} style={{ marginLeft: 5 }} />
            ),
          }}
          component={Profile}
        />
        <Drawer.Screen
          name="My Foods Requests"
          options={{
            drawerLabel: "My Foods Requests",
            drawerIcon: (config) => (
              <Icon name="bell-outline" size={30} style={{ marginLeft: 5 }} />
            ),
          }}
          component={Messages}
        />
        <Drawer.Screen
          name="Add Donation"
          options={{
            drawerLabel: "Add Donation",
            drawerIcon: (config) => (
              <Icon name="plus-circle-outline" size={30} style={{ marginLeft: 5 }} />
            ),
          }}
          component={AddItem}
        />

        <Drawer.Screen
          name="Setting"
          options={{
            drawerLabel: "Setting",
            drawerIcon: (config) => (
              <Icon name="account-settings-outline" size={30} style={{ marginLeft: 5 }} />
            ),
          }}
          component={firstScreenStack}
        />
        <Drawer.Screen
          name="Welcom"
          options={{
            drawerLabel: "Log Out",
            drawerIcon: (config) => (
              <Icon name="logout" size={30} style={{ marginLeft: 5 }} />
            ),
          }}
          component={logOut}
        />

      </Drawer.Navigator>

    </>
  );
};

export default Menu;
