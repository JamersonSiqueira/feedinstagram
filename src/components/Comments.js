import React, { useState } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { NameAutor, ContainerDesc, Container, Post, Header, Avatar, Name, Description, Loading } from './styles';
import like from '../assets/coracaoaceso.png';
import dislike from '../assets/coracaovazio.png';

export default (props) => {
  const [likeImage, setLikeImage] = useState(dislike);
  verificarLike();

  async function verificarLike(){
    console.log(props.item.comments);
}

  async function changeLikeStatus() {
    if (likeImage === dislike) {
      setLikeImage(like);
      console.log(props.item.likes);
    } else {
      setLikeImage(dislike);
        console.log(props.item.likes);
     let savedLikes = [];
      savedLikes = props.item.likes;
      var i;
      for(i=0;i<savedLikes.length;i++){
        console.log(i);
            if(savedLikes[i]==props.user.username){
                console.log("Já Curtiu");
            }
      }
    }
  }
  return (
    <View>
        <NameAutor>{props.item.comments.autor}</NameAutor><Name> {props.item.comments.comentario}</Name>
        <NameAutor>{props.item.comments.autor}</NameAutor><Name> {props.item.comments.comentario}</Name>
    </View>
  );
};