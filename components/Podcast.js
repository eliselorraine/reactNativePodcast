import { Image, StyleSheet, View, Text, useWindowDimensions } from 'react-native';
import { useEffect, useState } from 'react';
import { apiCall } from '../utils/api';
import RenderHtml from 'react-native-render-html';

export default Podcast = () => {
    const { width } = useWindowDimensions();
    const [data, setData] = useState([]);
    const image = 'https://picsum.photos/300';

    const getPodcast = async () => {
        try {
            const searchResults = await apiCall('star wars');
            setData(searchResults.results);
        } catch (e) {
            console.log(e.message);
        }
    }

    useEffect(() => {
        getPodcast();
    }, []);


    console.log(data[0], data.length);

    const source = {
        html: `
      <p style='text-align:center;'>
        Hello World!
      </p>`
    };

    if (data.length === 0) {
        return (
            <View style={styles.imageStyle}>
                <Image
                    style={StyleSheet.absoluteFill}
                    source={{ uri: image }}
                />
            </View>
        )
    }
    return (
        <View>
            <RenderHtml
                contentWidth={width}
                source={{ html: data[1].title_highlighted }}
            />
            <View style={styles.imageStyle}>
                <Image
                    style={StyleSheet.absoluteFill}
                    source={{ uri: data[1].thumbnail }}
                />
            </View>
            <RenderHtml
                contentWidth={width}
                source={{ html: data[1].description_highlighted }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    imageStyle: {
        aspectRatio: 1,
    },
    text: {
        fontSize: 20,
        color: 'red',
    }
})