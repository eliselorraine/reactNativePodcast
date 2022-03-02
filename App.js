import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import Logo from './components/Logo';
import SearchBar from './components/SearchBar';
import PodcastList from './components/PodcastList';

export default App = () => {

  return (
    <View style={styles.container}>
      <SearchBar />
      <PodcastList />
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
