import { StyleSheet, View } from 'react-native';
import HTML from 'react-native-render-html';
import { Entypo } from '@expo/vector-icons';

export default EpisodeTitle = ({ id, navigation, width, title }) => {
    const details = () => {
        navigation.navigate('Podcast Details', { id });
    }

    return (
        <View style={styles.container}>
            <HTML
                contentWidth={width}
                source={{ html: `<p>${title}</p>` }}
                tagsStyles={{
                    p: {
                        marginLeft: 10,
                        fontSize: 18,
                        fontWeight: 'bold',
                    },
                }}
            />
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
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 4,
        borderTopColor: "#147efb",
        borderTopWidth: StyleSheet.hairlineWidth,
    },
})