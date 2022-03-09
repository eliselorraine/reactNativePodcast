import { StyleSheet, View } from 'react-native';
import HTML from 'react-native-render-html';

export default EpisodeTitle = ({ width, title }) => {
    return (
        <View style={styles.row}>
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
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        padding: 4,
        borderTopColor: "#147efb",
        borderTopWidth: StyleSheet.hairlineWidth
    },
})