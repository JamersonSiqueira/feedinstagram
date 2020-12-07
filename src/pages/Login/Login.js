import React, { useState } from 'react';
import axios from 'axios';
import { Text, StyleSheet, Button , View, ScrollView, TextInput} from 'react-native';
import { Container, Post, Header, Avatar, Name, Description, Loading } from './styles';


export default (props) => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    
    function handleUsernameChange(username) {
        setUsername(username);
      }

    function handlePasswordChange(password) {
        setPassword(password);
    }
    
    function pressCadastro(){
        props.navigation.navigate('NewUser');
    }
    
    async function buttonPressed(){
        axios
        .get(`https://5fcd72b6603c0c00164878d9.mockapi.io/user?search=${username}`)
        .then(response => {
          const data = response.data
          if(data.username==null){
              console.log("NÃO ACHEI");
          } else if(data.username==username && data.password==password){

          }
          console.log("Logado!");
          props.navigation.navigate('Feed', {
            user: {
              name: data.name,
              username: data.username,
              password: data.password,
            },
          });
        })
        .catch(err => {
          console.log(err.message);
        })
      }
return (
    <Container>
        <Name>Nickname</Name>
        <TextInput
            onChangeText={handleUsernameChange}
            placeholder="Digite seu nick"
        />
        <Name>Senha</Name>
        <TextInput
            onChangeText={handlePasswordChange}
            placeholder="Digite sua senha"
            secureTextEntry={true}
        />
        <Button title="Login" onPress={buttonPressed} />
        <Name onPress={pressCadastro}>Cadastre-se aqui!</Name>
    </Container>



);

}