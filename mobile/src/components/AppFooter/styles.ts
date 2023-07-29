import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    
    container: {
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',

        width: '100%',
        paddingHorizontal: 16,
        bottom: 0,
    },

    pressed: {
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#006B9F',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#006B9F',
        width: 72,
        height: 72,

    },
    notPressed: {
    },

});