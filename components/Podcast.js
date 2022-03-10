import { Image, StyleSheet, View, useWindowDimensions } from 'react-native';
import HTML from 'react-native-render-html';
import AudioPlayer from './AudioPlayer';
import EpisodeTitle from './EpisodeTitle';
import { useSelector, useDispatch } from 'react-redux';
import { add, remove } from '../utils/redux/listSlice';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 
import { useEffect, useState } from 'react';

export default Podcast = ({ item, navigation }) => {
    // const location = navigation.getState().routes[1].name;
    const [added, setAdded] = useState(false);

    const id = item.id;
    const title = item.title_highlighted;
    const thumbnail = item.thumbnail;
    const description = item.description_highlighted;
    const audio = item.audio;
    const audioLength = item.audio_length_sec;
    const list = useSelector(state => state.list);
    const dispatch = useDispatch();

    const { width } = useWindowDimensions();

    useEffect(() => {
        const isAdded = list.find(podcast => podcast.id === id);
        if (isAdded) {
            setAdded(true);
            return;
        }
    });

    const addToList = (obj) => {
        dispatch(add(obj))
    }

    const removeFromList = (podcastToRemove) => {
        dispatch(remove(podcastToRemove))
        setAdded(false);
    }

    const details = () => {
        navigation.navigate('Podcast Details', { id });
    }

    return (
        <View>
            <EpisodeTitle
                title={title}
                width={width}
                navigation={navigation}
                id={id}
            />
            <View style={styles.btnContainer}>
                {added ? 
                <MaterialIcons.Button 
                    name="playlist-add-check" 
                    onPress={() => removeFromList(item)}
                    size={30} 
                    color="#147efb"
                    backgroundColor="transparent"
                    underlayColor="transparent"
                    activeOpacity={0.7}
                />
                :
                <MaterialIcons.Button
                    title='add to list"'
                    onPress={() => addToList(item)}
                    name="playlist-add"
                    size={30}
                    color="#147efb"
                    backgroundColor="transparent"
                    underlayColor="transparent"
                    activeOpacity={0.7}
                />
                }
                <Entypo.Button
                    name="dots-three-vertical"
                    size={24}
                    color="#147efb"
                    backgroundColor="transparent"
                    underlayColor="transparent"
                    activeOpacity={0.7}
                    onPress={details}
                />
            </View>
            <View style={styles.imageStyle}>
                <Image
                    style={StyleSheet.absoluteFill}
                    source={{ uri: thumbnail }}
                />
            </View>
            <AudioPlayer
                length={audioLength}
                audio={audio}
                item={item}
            />
            <HTML
                contentWidth={width}
                source={{ html: `<p>${description}</p>` }}
                tagsStyles={{
                    p: {
                        marginTop: 5,
                        marginHorizontal: 10,
                        fontSize: 15,
                    },
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    imageStyle: {
        aspectRatio: 1,
    },
    btnContainer: {
        flex: 1, 
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    }
})


// const statusObj = {
    // "didJustFinish": false,
    // "durationMillis": 1693224,
    // "hasJustBeenInterrupted": false,
    // "isBuffering": false,
    // "isLoaded": true,
    // "isLooping": false,
    // "isMuted": false,
    // "isPlaying": false,
    // "pitchCorrectionQuality": "Varispeed",
    // "playableDurationMillis": 1693224,
    // "positionMillis": 2327, // this is what we could use to scrub
    // "progressUpdateIntervalMillis": 500,
    // "rate": 1,
    // "shouldCorrectPitch": false,
    // "shouldPlay": false,
    // "uri": "https://www.listennotes.com/e/p/ea09b575d07341599d8d5b71f205517b/",
    // "volume": 1,
// }