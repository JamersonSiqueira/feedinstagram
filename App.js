import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Feed from './src/pages/Feed';
import NewUser from './src/pages/Login/NewUser';
import Login from './src/pages/Login/Login';
import Likes from './src/pages/Feed/Likes';
import Comentarios from './src/pages/Feed/Comentarios';
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator()

export default function App() {
  return (
    <View style={style.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="NewUser" component={NewUser} />
          <Stack.Screen name="Feed" component={Feed} />
          <Stack.Screen name="Likes" component={Likes} />
          <Stack.Screen name="Comentarios" component={Comentarios} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const style = StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: '#fff' 
    }
  }
)


