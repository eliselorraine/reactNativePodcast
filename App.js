import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Logo from './components/Logo';
import SearchBar from './components/SearchBar';
import Podcast from './components/Podcast';

export default App = () => {
  return (
    <View style={styles.container}>
      <Podcast />
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
