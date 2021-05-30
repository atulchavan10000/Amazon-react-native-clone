import {StyleSheet} from 'react-native'



const styles = StyleSheet.create({
    root: {
        borderWidth: 1,
        borderColor: '#d1d1d1',
        borderRadius: 10,
        backgroundColor: '#fff',
        marginVertical: 5,
        padding: 5
    },
    row:{
        flexDirection: 'row',
    },
    image:{
        flex: 2,
        height: 135,
        resizeMode: 'contain',
        margin: 5
    },
    rightContainer:{
        padding: 10,
        flex: 3
    },
    title:{
        fontSize: 18,
    },
    price:{
        fontSize: 18,
        fontWeight: 'bold',

    },
    ratingsContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10
    },
    star:{
        margin: 2
    },
    oldPrice:{
        fontSize: 12,
        fontWeight: 'normal',
        textDecorationLine: 'line-through'
    },
    quantityContainer: {
        marginLeft: 24,
        marginVertical: 5
    }

});

export default styles;