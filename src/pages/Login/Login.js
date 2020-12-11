import React, { useState } from 'react';
import axios from 'axios';
import { Text, StyleSheet, Button , View, ScrollView, TextInput} from 'react-native';
import { Logo, CaixaTexto, Container, Post, Header, Avatar, Name, Description, Loading, Corpo, NameHeader } from './styles';
import instalogo from '../../assets/instalogo.png';

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
          console.log(data[0].username)
          console.log(username)
          console.log(password)
          if(data[0].username==null || data[0].password==null){
              console.log("NÃO ACHEI");
          } else if(data[0].username==username && data[0].password==password){
            console.log("Logado!");
            props.navigation.navigate('Feed', {
              user: {
                name: data[0].name,
                username: data[0].username,
                password: data[0].password,
              },
            });
          }
          
        })
        .catch(err => {
          console.log(err.message);
        })
      }
return (
    <Container>
      <Corpo>
        <Logo source={instalogo}/>
        <Name>Nickname</Name>
        <CaixaTexto
            onChangeText={handleUsernameChange}
            placeholder="Digite seu nick"
        />
        <Name>Senha</Name>
        <CaixaTexto
            onChangeText={handlePasswordChange}
            placeholder="Digite sua senha"
            secureTextEntry={true}
        />
        <Button title="Login" onPress={buttonPressed} />
        <Name onPress={pressCadastro}>Cadastre-se aqui!</Name>
        </Corpo>
    </Container>



);

}