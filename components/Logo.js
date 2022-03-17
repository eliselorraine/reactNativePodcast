import { StyleSheet, Text } from 'react-native';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';

export default Logo = () => {
    let [fontsLoaded] = useFonts({
        Inter_900Black,
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <Text style={{
            fontFamily: 'Inter_900Black',
            fontSize: 30,
            textAlign: 'center',
            color: '#ffffff',
        }}>Hook: The Podcast App</Text>
    )
}

const styles = StyleSheet.create({
    header: {
        textAlign: 'center',
        fontSize: 25,
        color: '#ffffff',
    }
})