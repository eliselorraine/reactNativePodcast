import { fetchPodcastDetails } from "../utils/api";
import { useEffect, useState } from "react";
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    FlatList,
    Image,
    Dimensions,
} from 'react-native';

let windowWidth; 

export default PodcastDetails = ({ navigation }) => {
    const id = navigation.getState().routes[2].params.id;
    windowWidth = Dimensions.get('window').width;

    const [data, setData] = useState([]);
    const [episodes, setEpisodes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const getPodcastInfo = async () => {
        try {
            const podcastDetails = await fetchPodcastDetails(id);
            console.log(podcastDetails);
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
            <View>
                {/* <View style={styles.titleContainer}> */}
                    {/* <Image
                        style={styles.thumbnails}
                        source={{ uri: item.thumbnail }}
                    /> */}
                    <Text style={styles.episodeTitle}>
                        {item.title}
                    </Text>
                {/* </View> */}
                <AudioPlayer
                    length={item.audio_length_sec}
                    audio={item.audio}
                />
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text>
                    {data.description}
                </Text>
            </View>
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
        padding: 4,
        borderTopColor: "#147efb",
        borderTopWidth: StyleSheet.hairlineWidth,
    },
    titleContainer: {
        flex: 1, 
        flexDirection: 'row',
        width: windowWidth,

    },
    episodeTitle: {
        fontWeight: 'bold',
        fontSize: 15,
        padding: 4,
    },
    thumbnails: {
        aspectRatio: 1,
        width: 40,
    }
})