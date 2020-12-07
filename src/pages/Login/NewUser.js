import React, { useState } from 'react';
import axios from 'axios';
import { Text, StyleSheet, Button , View, ScrollView, TextInput} from 'react-native';
import { Container, Post, Header, Avatar, Name, Description, Loading } from './styles';


export default function NewUser(){

    const [name, setName] = useState();
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    function handleNameChange(name) {
        setName(name);
      }
    
    function handleUsernameChange(username) {
      setUsername(username);
    }
    
    function handleEmailChange(email){
        setEmail(email);
    }
    
    function handlePasswordChange(password) {
       setPassword(password);
    }

async function buttonPressed(){

    const payload = {name,username,email,password};

    axios
    .post(`https://5fcd72b6603c0c00164878d9.mockapi.io/user`, payload)
    .then(response => {
      console.log(response);
      console.log("Cadastrado!");
    })
    .catch(err => {
      console.log(err.message);
    })
  }

  return (
    <Container>
        <Name>Nome</Name>
        <TextInput
            onChangeText={handleNameChange}
            placeholder="Digite seu nome"
        />
        <Name>Nickname</Name>
        <TextInput
            onChangeText={handleUsernameChange}
            placeholder="Digite seu nick"
        />
        <Name>Email</Name>
        <TextInput
            onChangeText={handleEmailChange}
            placeholder="Digite seu email"
        />
        <Name>Senha</Name>
        <TextInput
            onChangeText={handlePasswordChange}
            placeholder="Digite sua senha"
            secureTextEntry={true}
        />
        <Button title="Cadastrar" onPress={buttonPressed} />

    </Container>
  );
}

