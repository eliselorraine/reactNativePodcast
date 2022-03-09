import { StyleSheet, Text, View, Button } from 'react-native';
import { useState, useEffect } from 'react';
import { apiCall } from './utils/api';
import { NavigationContainer } from '@react-navigation/native';
import NavBar from './routes';
import { Provider } from 'react-redux';
import store from './utils/redux/store';


export default App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <NavBar />
      </NavigationContainer>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  }
});
