import { StyleSheet, Text, View, Button } from 'react-native';
import { useState, useEffect } from 'react';
import { apiCall } from './utils/api';
import { NavigationContainer } from '@react-navigation/native';
import NavBar from './routes';

export default App = () => {
  return (
    <NavigationContainer>
      <NavBar />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  }
});
