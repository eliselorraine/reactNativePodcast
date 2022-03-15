import { fetchPodcastDetails } from "../utils/api";
import { useEffect, useState } from "react";
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    FlatList,
    Image,
} from 'react-native';

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
    }, [])

    const renderItem = ({ item }) => {
        return (
            <SafeAreaView style={styles.episodeContainer}>
                <Image
                    style={styles.imageStyle}
                    source={{ uri: item.thumbnail }}
                />
                <View>
                    <Text
                        numberOfLines={2}
                        ellipsizeMode='tail'
                        style={styles.episodeTitle}>
                        {item.title}
                    </Text>
                    <AudioPlayer
                        length={item.audio_length_sec}
                        audio={item.audio}
                    />
                </View>
            </SafeAreaView>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
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
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
    },
    description: {
        fontSize: 16,
        marginTop: 10,
        marginBottom: 10,
    },
    episodeContainer: {
        flex: 1,
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        borderTopColor: "#147efb",
        borderTopWidth: StyleSheet.hairlineWidth,
    },
    episodeTitle: {
        fontWeight: 'bold',
        fontSize: 15,
        padding: 4,
        overflow: 'hidden',
    },
    imageStyle: {
        aspectRatio: 1,
        width: 60,
    }

})