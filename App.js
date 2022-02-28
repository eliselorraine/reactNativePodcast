import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Logo from './components/Logo';
import SearchBar from './components/SearchBar';

export default App = () => {
  return (
    <View style={styles.container}>
      <Logo />
      <SearchBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  }
});
