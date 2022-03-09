import { View, Text, StyleSheet } from 'react-native';

export default ListenLater = () => {
    return (
        <View style={styles.container}>
            <Text>I am your listening list</Text>
        </View>
    )
}  

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
    }
})