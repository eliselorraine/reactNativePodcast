import {
    View,
    Text,
    SafeAreaView,
    Image,
    StyleSheet,
    Dimensions
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { add, remove } from '../utils/redux/listSlice';
import { MaterialIcons } from '@expo/vector-icons';
import AudioPlayer from './AudioPlayer';
import { useEffect, useState } from "react";

export default PlaylistPodcast = ({ item }) => {
    const [added, setAdded] = useState(false);
    const screenWidth = Dimensions.get('screen').width;
    const dispatch = useDispatch();
    const list = useSelector(state => state.list);

    useEffect(() => {
        const isAdded = list.find(podcast => podcast.id === item.id);
        if (isAdded) {
            setAdded(true);
            return;
        }
    });

    const addToList = (obj) => {
        dispatch(add(obj))
        return;
    }

    const removeFromList = (obj) => {
        dispatch(remove(obj))
        setAdded(false);
        return;
    }

    return (
        <SafeAreaView style={styles.episodeContainer}>
            <Image
                style={styles.imageStyle}
                source={{ uri: item.thumbnail }}
            />
            <View>
                <Text
                    style={
                        {
                            fontWeight: 'bold',
                            fontSize: 15,
                            paddingLeft: 10,
                            paddingTop: 4,
                            paddingRight: 22,
                            width: screenWidth - 60
                        }
                    }>
                    {item.title}
                </Text>
                <View style={styles.container}>
                    <AudioPlayer
                        length={item.audio_length_sec}
                        audio={item.audio}
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
                </View>
            </View>
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
    },
    episodeContainer: {
        flex: 1,
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        borderTopColor: "#147efb",
        borderTopWidth: StyleSheet.hairlineWidth,
        height: 100,
    },
    imageStyle: {
        aspectRatio: 1,
        width: 60,
        marginLeft: 10,
    }

})