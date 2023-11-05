import { View, Text, Button, Image } from "react-native";
import styles from "../components/styles";

export default function Perfil({navigation}){
    return <View>
        <Text>Perfil</Text>
        <Image style={styles.img} source={{uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'}}></Image>
        <Button title="Home" onPress={()=>navigation.navigate("Home")}></Button>
        <Button title="Logout" onPress={()=>console.log("deslogeado")}></Button>
    </View>
}