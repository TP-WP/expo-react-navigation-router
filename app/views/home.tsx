import { View, Text, Button, Image } from "react-native";
import styles from "../components/styles";

export default function Home({navigation}){
    return <View>
        <Text style={styles.title}>Home</Text>
        <Image style={styles.img} source={{uri: 'https://cdn4.vectorstock.com/i/1000x1000/37/08/map-santiago-chile-vector-38083708.jpg'}}></Image>
        <Button title="Perfil" onPress={()=>navigation.navigate("Perfil")}></Button>
    </View>
}