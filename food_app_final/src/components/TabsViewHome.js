import * as React from 'react';
import PropTypes from 'prop-types';
import { View, Dimensions, StatusBar,useWindowDimensions,StyleSheet } from 'react-native';
import { TabView, SceneMap,TabBar } from 'react-native-tab-view';
import { connect } from 'react-redux';

import Foods from './foods/Foods';
import { getAvilibalsFoods } from '../actions/foodActions';


// function mapStateToProps(state) {
//     return {
//         foods: state.foods,
//     };
// }

const TabsViewHome = () => {
    // console.log('loding' , props.foods.loading);
    const FirstRoute = () => (
        <View style={{ flex: 1}} >
            <Foods tab_name='foods'/>
        </View>
    );
    
    const SecondRoute = () => (
        <View style={{ flex: 1 }} >
            <Foods tab_name='snacks'/>
        </View>
    );

    

    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'Foods' },
        { key: 'second', title: 'Snacks' },
        // { key: 'second', title: 'Snacks' },
        // { key: 'second', title: 'Healthy' },
    ]);

    const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
    });



    return (
        // <TabView
        //     navigationState={{ index, routes }}
        //     renderScene={renderScene}
        //     onIndexChange={setIndex}
        //     initialLayout={{ width: layout.width }}
            
        // />

        <>
        {/* <StatusBar backgroundColor={'#00000'}/> */}
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          renderTabBar={props =>
            <TabBar
              {...props}
              indicatorStyle={{ backgroundColor: '#FA4A0C' ,borderBottomWidth: 5, borderBottomColor: '#FA4A0C' , color: '#FA4A0C'}}
              style={{ backgroundColor: '#FFA07A' }}
              colo
            />
          }
          onIndexChange={setIndex}
          initialLayout={{ width: Dimensions.get('window').width }}
        />
      </>

    );
}

// TabsViewHome.propTypes = {
//     foods: PropTypes.object
// };

export default TabsViewHome;

// export default connect(mapStateToProps, null)(TabsViewHome);
const styles = StyleSheet.create({
    text: {
    color: 'blue'
  },
});
