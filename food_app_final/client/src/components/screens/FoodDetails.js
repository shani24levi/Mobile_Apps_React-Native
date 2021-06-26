import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
  Button,
} from 'react-native';
import HeaderApp from '../Header';
import ButtonPickUp from '../foods/ButtonPickUp';

import RequstedUsersList from '../foods/RequstedUsersList';
import { AirbnbRating } from "react-native-elements";


function FoodDetails({ navigation, route }, props) {
  const item = route.params.user;

  const data = {
    receiver: item.user._id,
    food: item.i,
  }

  return (
    <View style={styles.container}>
      <HeaderApp backTo="Home" />
      <ScrollView>
        <View style={{ alignItems: 'center', marginHorizontal: 30 }}>
          <Image style={styles.productImg} source={{ uri: item.img }} />
          <Text style={styles.name}>{item.amount} {item.title}</Text>
          <Text style={styles.price}>{item.type}</Text>
          <Text style={styles.price}>{item.date}</Text>

          {
            item.description
              ?
              <Text style={styles.description}>{item.description}</Text>
              :
              <Text style={styles.description}>No description </Text>

          }
        </View>

        <AirbnbRating
          count={5}
          defaultRating={1}
          reviews={[
            "Maybe",
            "Okey",
            "Yahm",
            "Details",
            "FoodDetails"
          ]}
          onFinishRating={() =>
            console.log("onFinishRating()")
          }
          showRating
        />

        <RequstedUsersList food_id={item.i} />

        <View style={styles.addToCarContainer}>
          <ButtonPickUp data={data} />
        </View>
      </ScrollView>
    </View>
  );
}

export default FoodDetails;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  productImg: {
    width: 200,
    height: 200,
    borderRadius: 60,
    marginTop: 30
  },
  name: {
    fontSize: 28,
    color: "#696969",
    fontWeight: 'bold'
  },
  price: {
    marginTop: 10,
    fontSize: 18,
    color: "#FA4A0C",
    fontWeight: 'bold'
  },
  description: {
    textAlign: 'center',
    marginTop: 10,
    color: "#696969",
  },
  star: {
    width: 40,
    height: 40,
  },
  btnColor: {
    height: 30,
    width: 30,
    borderRadius: 30,
    marginHorizontal: 3
  },
  btnSize: {
    height: 40,
    width: 40,
    borderRadius: 40,
    borderColor: '#778899',
    borderWidth: 1,
    marginHorizontal: 3,
    backgroundColor: 'white',

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  starContainer: {
    justifyContent: 'center',
    marginHorizontal: 30,
    flexDirection: 'row',
    marginTop: 20
  },
  contentColors: {
    justifyContent: 'center',
    marginHorizontal: 30,
    flexDirection: 'row',
    marginTop: 20
  },
  contentSize: {
    justifyContent: 'center',
    marginHorizontal: 30,
    flexDirection: 'row',
    marginTop: 20
  },
  separator: {
    height: 2,
    backgroundColor: "#eeeeee",
    marginTop: 20,
    marginHorizontal: 30
  },
  shareButton: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: "#FA4A0C",
  },
  shareButtonText: {
    color: "#FFFFFF",
    fontSize: 20,
  },
  addToCarContainer: {
    marginHorizontal: 30
  }
});