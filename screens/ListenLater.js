import { View, Text, StyleSheet, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { add } from '../utils/redux/listSlice';

const fakePodcast = {
    id: 1, 
    title: 'Fake Podcast',
    description: 'Here is a fake podcast description',
}

export default ListenLater = () => {
    const list = useSelector(state => state.list);
    const dispatch = useDispatch();

    const addToList = () => {
        dispatch(add(fakePodcast))
        console.log(list);
    }
    
    return (
        <View style={styles.container}>
            <Text>I am your listening list</Text>
            <Button
                title='add something'
                onPress={addToList}
            />
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