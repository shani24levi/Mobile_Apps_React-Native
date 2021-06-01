import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { store } from './src/store';
import Home from './src/Components/Screens/Home';
import LastSearchs from './src/Components/Screens/LastSearchs';

const Stack = createStackNavigator();

export default App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: 'Sound Cloud Player',
              headerStyle: { backgroundColor: '#2E8B57' },
              headerTintColor: '#FFFFFF',
              headerTitleAlign: 'center'
            }}
          />

          <Stack.Screen
            name="LastSearchs"
            component={LastSearchs}
            options={{
              title: 'Sound Cloud Player',
              headerStyle: { backgroundColor: '#2E8B57' },
              headerTintColor: '#FFFFFF',
              headerTitleAlign: 'center'
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>

    </Provider>
  );
}