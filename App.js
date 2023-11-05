import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as Linking from "expo-linking";
import Login from "./app/views/login";
import Registro from "./app/views/registro";
import Home from "./app/views/home";
import Perfil from "./app/views/perfil";

//TODO set login as default route/stack when user is not logged in
//TODO set home as default route/stack when user is logged in
//TODO JWT persistent token auth

const LoginStack = createStackNavigator();
const HomeStack = createStackNavigator();
const prefix = Linking.createURL("/");

const loginConfig = {
  screens: {
    Login: "",
    Registro: "registro",
  },
};

const homeConfig = {
  screens: {
    Home: "",
    Perfil: "perfil",
  },
};

var user_logged_in = false;

export default function App() {
  if (!user_logged_in) {
    const linking = {
      prefixes: [prefix],
      config: loginConfig,
    };
    return (
      <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
        <LoginStack.Navigator>
          <LoginStack.Screen name="Login" component={Login} />
          <LoginStack.Screen name="Registro" component={Registro} />
        </LoginStack.Navigator>
      </NavigationContainer>
    );
  } else {
    const linking = {
      prefixes: [prefix],
      config: homeConfig,
    };
    return (
      <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
        <HomeStack.Navigator>
          <HomeStack.Screen name="Home" component={Home} />
          <HomeStack.Screen name="Perfil" component={Perfil} />
        </HomeStack.Navigator>
      </NavigationContainer>
    );
  }
}
