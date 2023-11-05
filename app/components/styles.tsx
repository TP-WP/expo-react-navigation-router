import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-start',
        alignSelf: 'center',
        justifyContent: 'space-around',
        height: '40%',
        marginVertical: 'auto',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderColor: '#000000',
        borderWidth: 3,
        borderRadius: 20
    },
    title: {
        alignSelf: 'center'
    },
    input: {
        backgroundColor: '#8C8C8D',
        borderRadius: 5
    },
    img: {
        width: 500,
        height: 500
    }
})

export default styles;