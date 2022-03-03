import {
    StyleSheet,
    Text,
    View,
    TextInput,
} from 'react-native';
import Logo from '../components/Logo';

export default SearchBar = ({ query, setQuery, handleSubmit }) => {
    return (
        <View style={styles.container}>
            <Logo />
            <Text style={styles.text}>Search through episodes by topic:</Text>
            <TextInput
                style={styles.input}
                placeholder='Enter topic or keyword...'
                onChangeText={newQuery => setQuery(newQuery)}
                defaultValue={query}
                onSubmitEditing={handleSubmit}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center',
        alignContent: 'center',
    },
    text: {
        textAlign: 'center',
        fontSize: 20,
        marginTop: 10,
    },
    input: {
        height: 40,
        textAlign: 'center',
        fontSize: 18,
    }
})