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
            drawerLabel: `shani`,
            // drawerIcon: (config) => (
            //   <Image
            //     source={{
            //       uri: `${user.avatar}`,
            //     }}
            //     style={{ width: 30, height: 30 }}
            //   />
            // ),
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
        {/* <Drawer.Screen
          name="Settings"
          options={{
            drawerLabel: "Settings",
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
        />
        <Drawer.Screen
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
