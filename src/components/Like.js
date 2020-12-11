import React, { useState } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import like from '../assets/coracaoaceso.png';
import dislike from '../assets/coracaovazio.png';

export default (props) => {
  const [likeImage, setLikeImage] = useState(dislike);
  //verificarLike();
  console.log(props.item.id);

  async function verificarLike(){
    let savedLikes = [];
    savedLikes = props.item.likes;
    var i;
    console.log(savedLikes.length);
    if(savedLikes!=null) {
    for(i=0;i<savedLikes.length;i++){
        console.log(i);
          if(savedLikes[i]==props.user.username){
            setLikeImage(like)
        } else {
            setLikeImage(dislike)
            }
        }
    }
}

  async function changeLikeStatus() {
    if (likeImage === dislike) {
      setLikeImage(like);
      console.log(props.item.likes);
      

      /*const currentLike = { item: props.item, user: props.user };
      let savedLikes = [];
      const response = await AsyncStorage.getItem('likes');

      if (response) savedLikes = JSON.parse(response);
      savedLikes.push(currentLike);

      await AsyncStorage.setItem('likes', JSON.stringify(savedLikes));*/
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
      /*let savedLikes = [];
      const response = await AsyncStorage.getItem('likes');

      if (response) savedLikes = JSON.parse(response);
      const index = savedLikes.findIndex(
        (like) =>
          like.item.id === props.item.id &&
          like.user.username === props.user.username
      );
      if (index) {
        savedLikes.splice(index, 1);
        await AsyncStorage.setItem('likes', JSON.stringify(savedLikes));
      }*/
    }
  }
  return (
    <View>
      <TouchableOpacity onPress={changeLikeStatus}>
        <Image source={likeImage} />
      </TouchableOpacity>
    </View>
  );
};