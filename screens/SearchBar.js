import {
    StyleSheet,
    Text,
    View,
    TextInput,
} from 'react-native';
import { useState } from 'react';
import Logo from '../components/Logo';
import { apiCall } from '../utils/api';

export default SearchBar = ({ navigation }) => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const handleSubmit = async () => {
        if (query === '') return;
        try {
            const searchResults = await apiCall(query);
            // console.log(searchResults);
            setResults(searchResults);
            setLoading(false);
            setError(false);
            navigation.navigate('Results', { query });
        } catch (e) {
            console.log(e.message);
            setLoading(false);
            setError(true);
        }
    }

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
                returnKeyType='search'
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