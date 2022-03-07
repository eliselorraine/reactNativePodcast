import { Image, StyleSheet, View, Text, Button, useWindowDimensions } from 'react-native';
import { useEffect, useState } from 'react';
import { apiCall } from '../utils/api';
import HTML from 'react-native-render-html';
// import TrackPlayer, { RepeatMode } from 'react-native-track-player';
// import { Audio } from 'expo-av';


export default Podcast = ({ title, thumbnail, description }) => {

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
            {/* <View>
                <Button title='play sound' onPress={playSound} />
            </View> */}
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