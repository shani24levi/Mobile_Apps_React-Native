import React,{ useState } from "react";
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
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from "./screens/Home";
import Profile from "./profile/Profile";


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


const NavigationMassages = (props) => {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };
  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={() => toggleDrawer()}>
        <Icon name="bell-outline" size={30} color="#FA4A0C" style={{ marginRight: 15 }} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => toggleDrawer()}>
        <Icon name="food-fork-drink" size={30} color="#000" style={{ marginRight: 15 }} />
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
          headerRight: () => (
            <NavigationMassages navigationProps={navigation} />
          ),
          headerStyle: {backgroundColor: "#fff"},
          headerTintColor: "#000", 
          headerTitleStyle: {fontWeight: "bold" },
        }}
      />
    </Stack.Navigator>
  );
}

const Menu = ({ navigation, route }) => {
  const user = route.params;
  console.log(user);
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
            drawerLabel: user.user != undefined ? user.user : 'Welcom Back',
            drawerIcon: (config) => (
              <Image
                source={{
                  uri: user.avatar != undefined ? `${user.avatar}` : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_yQNApJkRMrztokLbDY6k1gDdsdv8XlSDGA&usqp=CAU',
                }}
                style={{ width: 100, height: 100 , borderRadius: 50}}
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
        {/* <Drawer.Screen
          name="Sign out"
          options={{
            drawerLabel: "Sign out",
            drawerIcon: (config) => (
              <Icon
                size={23}
                name={
                  Platform.OS === "android" ? "md-settings" : "ios-Settings"
                }
              ></Icon>
            ),
          }}
          component={firstScreenStack}
        /> */}
      </Drawer.Navigator>

    </>
  );
};

export default Menu;
