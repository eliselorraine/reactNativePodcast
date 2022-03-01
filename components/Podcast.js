import { Image, StyleSheet, View } from 'react-native';

export default Podcast = () => {
    const image = 'https://picsum.photos/300';
    return (
        <View style={styles.imageStyle}>
            <Image 
                style={StyleSheet.absoluteFill}
                source={{ uri: image }}
            /> 
        </View>
    )
}

const styles = StyleSheet.create({
    imageStyle: {
        aspectRatio: 1, 
    }
})