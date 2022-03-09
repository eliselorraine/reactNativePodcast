import { Image, StyleSheet, View, useWindowDimensions, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import HTML from 'react-native-render-html';
import { Audio } from 'expo-av';
import AudioPlayer from './AudioPlayer';
import EpisodeTitle from './EpisodeTitle';

// three dots icon, which could either add to your listening list, or see podcast details

export default Podcast = ({ id, navigation, title, thumbnail, description, audio, audioLength }) => {
    const [sound, setSound] = useState(new Audio.Sound());
    const [error, setError] = useState(null);
    const [playing, setPlaying] = useState(false);

    const setup = async () => {
        Audio.setAudioModeAsync({
            allowsRecordingIOS: false,
            interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
            playsInSilentModeIOS: true,
            interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,
            shouldDuckAndroid: true,
            staysActiveInBackground: true,
            playsThroughEarpieceAndroid: true,
        })
    }

    useEffect(() => {
        setup()
    }, [])

    const playSound = async () => {
        const status = {
            shouldPlay: false,
        }

        const source = {
            uri: audio,
            overrideFileExtensionAndroid: '.mp3',
        }

        try {
            const loadStatus = await sound.getStatusAsync();

            if (loadStatus.isLoaded) {
                await sound.playAsync();
                setPlaying(true);
                console.log(loadStatus);
                return;
            }

            await sound.loadAsync(source, status, false);
            await sound.playAsync();
            setPlaying(true);
        } catch (e) {
            console.log(e.message);
            setError(true);
        }
    }

    const pauseSound = async () => {
        try {
            await sound.pauseAsync();
            setPlaying(false);
        } catch (e) {
            console.log(e.message);
            setError(true);
        }
    }

    const { width } = useWindowDimensions();

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
            <AudioPlayer
                playSound={playSound}
                pauseSound={pauseSound}
                playing={playing}
                length={audioLength}
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