// import Slider from '@react-native-community/slider';
import { StyleSheet, View, Text } from 'react-native';
import { useEffect, useState } from 'react';
import { Audio } from 'expo-av';
import { AntDesign } from '@expo/vector-icons';

export default AudioPlayer = ({ length, audio }) => {
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

    const playSound = async (a) => {
        const status = {
            shouldPlay: false,
        }

        const source = {
            uri: a,
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

    const convertSeconds = (ms) => {
        const minutes = Math.floor(ms / 60);
        let seconds = ms % 60 ? ms % 60 : '00';
        if (seconds < 10) {
            seconds = `0${seconds}`;
        }

        return minutes + ':' + seconds;
    }

    return (
        <View style={styles.audioContainer}>
            {!playing ?
                <View>
                    <AntDesign.Button
                        title='play sound'
                        onPress={() => playSound(audio)}
                        name="playcircleo"
                        size={30}
                        color="#147efb"
                        backgroundColor="transparent"
                        underlayColor="transparent"
                        activeOpacity={0.7}
                    />
                </View>
                :
                <View>
                    <AntDesign.Button
                        title='pause sound'
                        onPress={pauseSound}
                        name="pausecircleo"
                        size={30}
                        color="#147efb"
                        backgroundColor="transparent"
                        underlayColor="transparent"
                        activeOpacity={0.7}
                    />
                </View>
            }
            <Text style={styles.length}>{convertSeconds(length)}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    audioContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    length: {
        fontSize: 17,
    }
})