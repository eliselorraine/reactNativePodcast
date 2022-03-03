import { Image, StyleSheet, View, Text, useWindowDimensions } from 'react-native';
import { useEffect, useState } from 'react';
import { apiCall } from '../utils/api';
import RenderHtml from 'react-native-render-html';

export default Podcast = ({ title, thumbnail, description }) => {
    const { width } = useWindowDimensions();
    // const image = 'https://picsum.photos/300';

    return (
        <View>
            <RenderHtml
                contentWidth={width}
                source={{ html: title }}
            />
            <View style={styles.imageStyle}>
                <Image
                    style={StyleSheet.absoluteFill}
                    source={{ uri: thumbnail }}
                />
            </View>
            <RenderHtml
                contentWidth={width}
                source={{ html: description }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    imageStyle: {
        aspectRatio: 1,
    },
})