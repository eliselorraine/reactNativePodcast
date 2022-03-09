import { fetchPodcastDetails } from "../utils/api";
import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from 'react-native';

export default PodcastDetails = ({ navigation }) => {
    const id = navigation.getState().routes[2].params.id;

    const [data, setData] = useState([]);
    const [episodes, setEpisodes] = useState([]);
    const [loading, setLoading] = useState(false);
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
        console.log(data);
    }, [])

    return (
        <View style={styles.container}>
            <Text>I am the podcast details</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})