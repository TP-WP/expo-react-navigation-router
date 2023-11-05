esto fue creado con

npx create-expo-app

para stack navigation:

npm install @react-navigation/native @react-navigation/stack

npx expo install react-native-screens react-native-safe-area-context react-native-gesture-handler

para linking routes:

npx expo install expo-linking

para desarrollo web:

npx expo install react-native-web react-dom @expo/webpack-config

habilita metro bundler en app.json

{
"web": {
"bundler": "metro"
}
}

habilita expo-linking en app.json
{
"expo": {
"scheme": "mychat"
}
}
