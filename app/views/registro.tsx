import { View, Text, TextInput, Button } from 'react-native';
import styles from '../components/styles';

export default function Registro({navigation}) {
  return <View style={styles.container}>
    <Text style={styles.title}>Registro</Text>
    <Text>correo</Text>
    <TextInput style={styles.input}></TextInput>
    <Text>contraseña</Text>
    <TextInput style={styles.input}></TextInput>
    <Button title='registrarse'></Button>
    <Button title="Login" onPress={()=>navigation.navigate("Login")}></Button>
  </View>;
}