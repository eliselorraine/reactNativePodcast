import { 
    Image, 
    StyleSheet, 
    View, 
    useWindowDimensions
} from 'react-native';
import HTML from 'react-native-render-html';
import AudioPlayer from './AudioPlayer';
import EpisodeTitle from './EpisodeTitle';
import { MaterialIcons, Entypo } from '@expo/vector-icons';

import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { add, remove } from '../utils/redux/listSlice';

export default Podcast = ({ item, navigation }) => {
    const [added, setAdded] = useState(false);

    const id = item.id;
    const title = item.title_highlighted || item.title;
    const thumbnail = item.thumbnail;
    const description = item.description_highlighted || item.description;
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

    const removeFromList = (obj) => {
        dispatch(remove(obj))
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
            <View style={styles.imageStyle}>
                <Image
                    style={StyleSheet.absoluteFill}
                    source={{ uri: thumbnail }}
                />
            </View>
            <View style={styles.btnContainer}>
                <AudioPlayer
                    length={audioLength}
                    audio={audio}
                />
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
