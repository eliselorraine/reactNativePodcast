import { Text, View, StyleSheet } from 'react-native';
import Logo from '../components/Logo';

export default About = () => {
    return (
        <View style={styles.container}>
            <Logo />
            <Text style={styles.text}>
                For me, podcasts have always been a somewhat undiscovered media. 
                I know there are many I would probably enjoy, yet I am overwhelmed 
                by endless options and unsure of where to start. This app is 
                for anybody who feels the same. Search through the entire Listen 
                Notes Podcast collection to find episodes or podcast channels 
                you are interested in. Listen right away or save the podcasts 
                for later listening.
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        marginHorizontal: 14,
    },
    text: {
        textAlign: 'center',
        fontSize: 20,
    }
})