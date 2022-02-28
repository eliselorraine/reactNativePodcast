import {
    StyleSheet,
    Text,
    View,
    TextInput,
} from 'react-native';

import { useState } from 'react';

import { apiCall } from '../utils/api';

export default SearchBar = () => {
    const [query, setQuery] = useState('');

    const handleSubmit = () => {
        if (query === '') return;

        try {
            apiCall(query);
        } catch (e) {
            console.log(e.message);
        }
    }

    return (
        <View>
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
    text: {
        textAlign: 'center',
        fontSize: 16,
    },
    input: {
        height: 40,
        textAlign: 'center',
        fontSize: 16,
    }
})