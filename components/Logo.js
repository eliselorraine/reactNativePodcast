import { StyleSheet, Text } from 'react-native';

export default Logo = () => {
    return (
        <Text style={styles.header}>Hook: The Podcast App</Text>
    )
}

const styles = StyleSheet.create({
    header: {
        textAlign: 'center',
        fontSize: 25,
        textDecorationLine: 'underline',
    }
})