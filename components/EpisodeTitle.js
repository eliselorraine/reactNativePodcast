import { StyleSheet, View } from 'react-native';
import HTML from 'react-native-render-html';

export default EpisodeTitle = ({ width, title }) => {

    return (
        <View style={styles.container}>
            <HTML
                contentWidth={width}
                source={{ html: `<p>${title}</p>` }}
                tagsStyles={{
                    p: {
                        marginLeft: 10,
                        marginRight: 10,
                        fontSize: 18,
                        fontWeight: 'bold',
                    },
                }}
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