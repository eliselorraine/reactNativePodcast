import { Image, StyleSheet, View, Text, Button, useWindowDimensions } from 'react-native';
import { useEffect, useState } from 'react';
import HTML from 'react-native-render-html';
import { Audio } from 'expo-av';


export default Podcast = ({ title, thumbnail, description, audio }) => {
    const [sound, setSound] = useState(new Audio.Sound());

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

        const loadStatus = await sound.getStatusAsync();
        
        if (loadStatus.isLoaded) {
            await sound.playAsync();
            return;
        }
    
        await sound.loadAsync(source, status, false);
        await sound.playAsync();
    }
    
    const pauseSound = async () => {
        await sound.pauseAsync();
    }

    const { width } = useWindowDimensions();
    return (
        <View>
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
            <View>
                <Button 
                    title='play sound' 
                    onPress={playSound}
                />
            </View>
            <View>
                <Button title='pause sound' onPress={pauseSound} />
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
})