import { Image, StyleSheet, View, Text, Button, useWindowDimensions } from 'react-native';
import { useEffect, useState } from 'react';
import HTML from 'react-native-render-html';
import { Audio } from 'expo-av';
import { AntDesign } from '@expo/vector-icons';


export default Podcast = ({ title, thumbnail, description, audio, audioLength }) => {
    const [sound, setSound] = useState(new Audio.Sound());
    const [error, setError] = useState(null);
    const [playing, setPlaying] = useState(false);
    const [length, setLength] = useState(audioLength);

    const convertSeconds = (value) => {
        const minutes = Math.floor(value / 60);
        let seconds = value % 60 ? value % 60 : '00';
        if (seconds < 10) {
            seconds = `0${seconds}`;
        }

        return minutes + ':' + seconds;
    }

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
        setLength(convertSeconds(audioLength));
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
        <View style={styles.row}>
            <HTML
                contentWidth={width}
                source={{ html: `<p>${title}</p>` }}
                tagsStyles={{
                    p: {
                        paddingTop: 10,
                        marginLeft: 10,
                        fontSize: 18,
                        fontWeight: 'bold',
                    },
                }}
            />
            <View style={styles.imageStyle}>
                <Image
                    style={StyleSheet.absoluteFill}
                    source={{ uri: thumbnail }}
                />
            </View>
            <View style={styles.audioContainer}>
                {!playing ?
                    <View>
                        <AntDesign.Button
                            title='play sound'
                            onPress={playSound}
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
                <Text style={styles.length}>{length}</Text>
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
    row: {
        padding: 4,
        borderBottomColor: "#147efb",
        borderBottomWidth: StyleSheet.hairlineWidth
    },
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