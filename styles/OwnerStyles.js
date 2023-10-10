import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
        alignItems: 'center',
        backgroundColor: '#f2f2f2'
    },
    inputFlex: {
        flex: 1,
        backgroundColor: '#f2f2f2'
    },
    inputSection: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: 20,
    },
    inputStyle: {
        fontSize: 15,
        width: "40%",
        height: 50,
        marginTop: 5,
        margin: 10,
        backgroundColor: '#fff',
        borderColor: '#ccc',
        borderRadius: 10,
        borderWidth: 1,
        textAlignVertical: 'center',
        textAlign: 'center',
    },
    inputChnage: { width: "90%" },
    radioSection: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 20,
        flexDirection: 'row',
    },
    radioLabel: {
        fontSize: 20,
        fontWeight: 'bold',
        marginRight: 10,
        color: 'blue', // Update the color
    },
    txtStyle: {
        fontSize: 30,
        marginTop: 20,
        margin: 10,
        fontWeight: 'bold',
        color: '#333'
    },
    radioText: {
        fontSize: 20,
        color: 'black', // Update the color
    },
    radio: {
        height: 30,
        width: 30,
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor: 'white',
        color: 'black',
        borderRadius: 15,
        margin: 10
    },
    radioWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 20,
    },
    radiobg: {
        backgroundColor: 'black',
        height: 18,
        width: 18,
        borderRadius: 15,
        margin: 5
    },
    buttonStyle: {
        backgroundColor: 'black', // Update the color
        textAlignVertical: 'center',
        textAlign: 'center',
        marginTop: 30,
        fontSize: 20,
        fontWeight: 'bold',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderRadius: 5,
        color: 'white', // Update the color

    }
});
