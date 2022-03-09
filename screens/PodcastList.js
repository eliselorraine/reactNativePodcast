import { useState, useEffect } from 'react';
import { SafeAreaView, FlatList, Text, View, Button, StyleSheet, ActivityIndicator } from 'react-native';
import Podcast from '../components/Podcast';
import { apiCall } from '../utils/api';

export default PodcastList = ({ navigation }) => {
    const query = navigation.getState().routes[1].params.query;

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [nextOffset, setNextOffset] = useState(0);

    const getPodcasts = async () => {
        try {
            const searchResults = await apiCall(query, nextOffset);
            setData(searchResults.results);
            setLoading(false);
        } catch (e) {
            setLoading(false);
            setError(true);
            console.log(e.message);
        }
    }

    // const nextPage = () => {
    //     setNextOffset(nextOffset + 10);
    // }

    // const prevPage = () => {
    //     setNextOffset(nextOffset - 10);
    // }

    useEffect(() => {
        getPodcasts();
        // console.log('I am an api call from PodcastList')
    }, [nextOffset]);

    const renderItem = ({ item }) => {
        return (
            <View>
                <Podcast
                    title={item.title_highlighted}
                    thumbnail={item.thumbnail}
                    description={item.description_highlighted}
                    audio={item.audio}
                    publisher={item.podcast.publisher_highlighted}
                    audioLength={item.audio_length_sec}
                />
            </View>
        )
    }

    if (!loading && !error) {
        return (
            <SafeAreaView>
                {/* <Button
                    title='next page'
                    onPress={nextPage}
                />
                <Button
                    title='previous page'
                    onPress={nextPage}
                /> */}
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>
        )
    } else if (loading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" />
            </View>
        )
    } else if (error) {
        return (
            <View style={styles.error}>
                <Text style={styles.text}>Sorry, it looks like we are having technical difficulties. Please try again later.</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
    },
    error: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        paddingHorizontal: 30,
    },
    text: {
        fontSize: 18,
        textAlign: 'center',
    }
});