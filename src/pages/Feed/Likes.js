import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, Image, Button} from 'react-native';
import { ContainerDesc, Container, Post, Header, Avatar, Name, Description, Loading, NameCenter} from './styles';
import user from '../../assets/user30.png';

export default (props) => {
  const [likes, setLikes] = useState();

  useEffect(() => {
    handleCurtidas();
  }, []);

  
  async function handleCurtidas() {
    let savedLikes = [];
      savedLikes = props.route.params.likes;
    /*const response = await AsyncStorage.getItem('likes');
    if (response) savedLikes = JSON.parse(response);
    const match = savedLikes.filter(
      (like) => like.item.id === props.route.params.id
    );*/
    setLikes(savedLikes);
  }
  const renderItem = ({ item }) => {
    return (
      <ContainerDesc>
          <Avatar source={user}></Avatar>
          <Name>{item}</Name>
      </ContainerDesc>
    );
  };

  return (
    <ContainerDesc>
      <SafeAreaView>
        <NameCenter>Curtido por: </NameCenter>
        <FlatList
          key="list"
          data={likes}
          renderItem={renderItem}
          keyExtractor={(item) => {
            item;
          }}
        />
      </SafeAreaView>
    </ContainerDesc>
  );
};

const style = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  nameUser: {
    fontWeight: 'bold',
    fontSize: 17,
  },
  avatar: {
    width: 50,
    height: 50,
    aspectRatio: 1,
    borderRadius: 50,
    marginRight: 15,
  },
});