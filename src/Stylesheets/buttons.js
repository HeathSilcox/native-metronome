import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
    btn: {
        padding: 15,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: '#555',
        borderStyle: 'solid',
        borderRadius: 4,
        backgroundColor: '#ff5555',
        width: Dimensions.get('window').width / 2,
    }
});