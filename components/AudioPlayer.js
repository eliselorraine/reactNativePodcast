// import Slider from '@react-native-community/slider';
import { AntDesign } from '@expo/vector-icons';
import { StyleSheet, View, Text } from 'react-native';

export default AudioPlayer = ({ length, playing, pauseSound, playSound }) => {
    
    const convertSeconds = (ms) => {
        const minutes = Math.floor(ms / 60);
        let seconds = ms % 60 ? ms % 60 : '00';
        if (seconds < 10) {
            seconds = `0${seconds}`;
        }

        return minutes + ':' + seconds;
    }

    return (
        <View style={styles.audioContainer}>
            {!playing ?
                <View>
                    <AntDesign.Button
                        title='play sound'
                        onPress={playSound}
                        name="playcircleo"
                        size={30}
                        color="#147efb"
                        backgroundColor="transparent"
                        underlayColor="transparent"
                        activeOpacity={0.7}
                    />
                </View>
                :
                <View>
                    <AntDesign.Button
                        title='pause sound'
                        onPress={pauseSound}
                        name="pausecircleo"
                        size={30}
                        color="#147efb"
                        backgroundColor="transparent"
                        underlayColor="transparent"
                        activeOpacity={0.7}
                    />
                </View>
            }
            <Text style={styles.length}>{convertSeconds(length)}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    audioContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    length: {
        fontSize: 17,
    }
})