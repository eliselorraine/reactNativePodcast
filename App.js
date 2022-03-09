import { StyleSheet, Text, View, Button } from 'react-native';
import { useState, useEffect } from 'react';
import { apiCall } from './utils/api';
import { NavigationContainer } from '@react-navigation/native';
import NavBar from './routes';
import { Audio } from 'expo-av';

export default App = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // const sound = new Audio.Sound();
  // try {
  //   await sound.loadAsync(require('./assets/test.mp3'));
  //   await sound.playAsync();
  //   await sound.unloadAsync();
  // } catch (e) {
  //   console.log(e.message);
  // }

  const handleSubmit = async () => {
    if (query === '') return;
    try {
      const searchResults = await apiCall(query);
      // console.log(searchResults);
      setResults(searchResults);
      setLoading(false);
      setError(false);
    } catch (e) {
      console.log(e.message);
      setLoading(false);
      setError(true);
    }
  }

  // return (
  //   <View style={styles.container}>
  //     <Button title="Play Sound" onPress={playSound} />
  //   </View>
  // )

  return (
    <NavigationContainer>
      <NavBar />
    </NavigationContainer>
  )
  // if (results.length === 0) {
  //   return (
  //     <View style={styles.container}>
  //       <SearchBar
  //         setQuery={setQuery}
  //         query={query}
  //         handleSubmit={handleSubmit}
  //       />
  //     </View>
  //   );
  // } else if (results.length !== 0 && !error) {
  //   return (
  //     <View style={styles.container}>
  //       <PodcastList
  //         query={query}
  //       />
  //     </View>
  //   );
  // } 

  // return (
  //   <View>
  //     <Text>Sorry, it looks like we are having technical difficulties. Please try again later.</Text>
  //   </View>
  // )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  }
});
