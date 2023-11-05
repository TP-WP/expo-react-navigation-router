import { View, Text, TextInput, Button } from 'react-native';
import styles from '../components/styles';
import CustomInput from '../components/customInput';

export default function Login({navigation}) {
  return <View style={styles.container}>
    <Text style={styles.title}>Login</Text>
    <Text>correo</Text>
    <TextInput style={styles.input}></TextInput>
    <Text>contraseña</Text>
    <TextInput style={styles.input}></TextInput>
    <Button title='login'></Button>
    <Button title="Registrarse" onPress={()=>navigation.navigate("Registro")}></Button>
  </View>;
}