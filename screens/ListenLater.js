import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { useSelector } from 'react-redux';
import Podcast from '../components/Podcast';

export default ListenLater = ({ navigation }) => { 
    const list = useSelector(state => state.list);

    const renderItem = ({ item }) => {
        return (
            <View>
                <Podcast
                    item={item}
                    navigation={navigation}
                />
            </View>
        )
    }

    if (list.length === 0) {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Your list is empty! Search podcasts to add episodes for later listening.</Text>
            </View>
        )
    }
    return (
        <SafeAreaView>
            <FlatList
                data={list}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        paddingHorizontal: 10,
        fontSize: 18,
        textAlign: 'center',
    },
})