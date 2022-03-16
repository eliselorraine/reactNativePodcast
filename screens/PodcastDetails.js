import { fetchPodcastDetails } from "../utils/api";
import { useEffect, useState } from "react";
import {
    SafeAreaView,
    Text,
    StyleSheet,
    FlatList,
    Dimensions,
    ActivityIndicator,
    View,
} from 'react-native';
import PlaylistPodcast from "../components/PlaylistPodcast";

export default PodcastDetails = ({ navigation }) => {
    const id = navigation.getState().routes[2].params.id;
    const screenWidth = Dimensions.get('screen').width;

    const [data, setData] = useState([]);
    const [episodes, setEpisodes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getPodcastInfo = async () => {
        try {
            const podcastDetails = await fetchPodcastDetails(id);
            setData(podcastDetails);
            setEpisodes(podcastDetails.episodes)
            setLoading(false);
        } catch (e) {
            setLoading(false);
            setError(true);
            console.log(e.message);
        }
    }

    useEffect(() => {
        getPodcastInfo();
    }, [])

    const renderItem = ({ item }) => {
        return (
            <PlaylistPodcast
                item={item}
            />
        )
    }

    if (!loading && !error) {
        return (
            <SafeAreaView style={
                {
                    width: screenWidth,
                    flex: 1,
                }
            }>
                <Text style={styles.description}>
                    {data.description}
                </Text>
                <FlatList
                    data={episodes}
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
    description: {
        fontSize: 16,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10,
    },
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
})