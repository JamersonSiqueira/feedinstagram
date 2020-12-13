import React, { useState, useEffect } from 'react';
import { TextInput, StyleSheet, Text, View, SafeAreaView, FlatList, Image, Button} from 'react-native';
import { NameAutor, ContainerDesc, Container, Post, Header, Avatar, Name, Description, Loading } from './styles';
import user from '../../assets/user30.png';

export default (props) => {
  const [comentarios, setComentarios] = useState([]);
  const [text, setText] = useState('');
  const MAX_LENGTH = 250;

  useEffect(() => {
    handleComentarios();
  }, []);

  
  async function handleComentarios() {
    let listaComentarios = [];
    listaComentarios = props.route.params.comments;
    console.log(listaComentarios);
    /*const response = await AsyncStorage.getItem('likes');
    if (response) savedLikes = JSON.parse(response);
    const match = savedLikes.filter(
      (like) => like.item.id === props.route.params.id
    );*/
    setComentarios(listaComentarios);
  }
  const renderItem = ({ item }) => {
    return (
      <ContainerDesc>
          <Avatar source={user}></Avatar>
          <NameAutor>{item.autor}</NameAutor><Name> {item.comentario}</Name>
      </ContainerDesc>
    );
  };

  return (
    <ContainerDesc>
      <SafeAreaView>
        <FlatList
          key="list"
          data={comentarios}
          renderItem={renderItem}
          keyExtractor={(item) => {
            item;
          }}
        />
        <TextInput
              multiline={true}
              onChangeText={(text) => setText(text)}
              placeholder={"Comentário"}
              style={[styles.text]}
              maxLength={MAX_LENGTH}
              value={text}/>

            <Button
              title="Salvar"
              onPress={() => onSave(String(item.id))}
              accessibilityLabel="Salvar">
            </Button>
      </SafeAreaView>
    </ContainerDesc>
  );
};
const styles = StyleSheet.create(
    {text: {
      fontSize: 30,
      lineHeight: 33,
      color: "#333333",
      width: 350,
      padding: 16,
      paddingTop: 16,
      borderTopWidth: 1,
      borderColor: "rgba(212,211,211, 0.3)"
  }})
  