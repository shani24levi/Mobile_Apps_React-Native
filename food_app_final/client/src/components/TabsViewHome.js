import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, Dimensions, StatusBar, useWindowDimensions, StyleSheet,Text } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { connect } from 'react-redux';
import Loading from './Loading';

import FoodsList from './foods/FoodsList';
import { getAvilibalsFoods , getAvilibalsType} from '../actions/foodActions';


function mapStateToProps(state) {
      return {
        foods: state.foods,
        snacks: state.snacks,
        drinks: state.drinks,
        dairies: state.dairies,
        meats: state.meat,
    };
}

const TabsViewHome = (props) => {
  const {search} = props;

  React.useEffect(() => {
    props.getAvilibalsFoods();
    props.getAvilibalsType('snack');
    props.getAvilibalsType('drink');
    props.getAvilibalsType('dairy');
    props.getAvilibalsType('meat');

    return;
}, [])


const searchList = props.foods.foods.filter(todo => todo.title.toString().toLowerCase().includes(search));
  const FirstRoute = () => (
    <>
      {
        props.foods.loading
          ?
          <Loading />
          :
          <View style={{ flex: 1 }} >
            <FoodsList tab_list={searchList}/>
          </View>
      }
    </>
  );

  const SecondRoute = () => (
    <>
    {
      props.foods.loading
        ?
        <Loading />
        :
        <View style={{ flex: 1 }} >
          <FoodsList tab_list={props.foods.snacks} />
        </View>
    }
  </>
  );

  const ThirdRoute = () => (
    <>
    {
     props.foods.loading
        ?
        <Loading />
        :
        <View style={{ flex: 1 }} >
          <FoodsList tab_list={props.foods.drinks} />
        </View>
    }
  </>
  );

  const FourthRoute = () => (
    <>
    {
     props.foods.loading
        ?
        <Loading />
        :
        <View style={{ flex: 1 }} >
          <FoodsList tab_list={props.foods.dairies} />
        </View>
    }
  </>
  );

  const FifthRoute = () => (
    <>
    {
      props.foods.loading
        ?
        <Loading />
        :
        <View style={{ flex: 1 }} >
          <FoodsList tab_list={props.foods.meats} />
        </View>
    }
  </>
  );
  

  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Food'},
    { key: 'second', title: 'Snack'},
    { key: 'third', title: 'Drink' },
    { key: 'fourth', title: 'Dairy' },
    { key: 'fifth', title: 'Meat' },
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
    fourth: FourthRoute,
    fifth: FifthRoute,
  });


  return (
    <>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        // style={{color:'blue', borderBottomColor:'black'}}
        renderTabBar={props =>
          <TabBar
            {...props}

            indicatorStyle={{ borderBottomWidth: 5, borderBottomColor: '#FA4A0C' }}
            style={{ backgroundColor: '#FFA07A' }}
          />
        }
        onIndexChange={setIndex}
        initialLayout={{ width: Dimensions.get('window').width }}
      />
    </>

  );
}

TabsViewHome.propTypes = {
    foods: PropTypes.object
};

// export default TabsViewHome;

export default connect(mapStateToProps, {getAvilibalsFoods, getAvilibalsType})(TabsViewHome);

const styles = StyleSheet.create({
  text: {
    color: 'blue'
  },
});
