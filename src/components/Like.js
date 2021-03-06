import React, { useState } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import like from '../assets/coracaoaceso.png';
import dislike from '../assets/coracaovazio.png';

export default (props) => {
  const [likeImage, setLikeImage] = useState(dislike);
  verificarLike();
 // console.log(props.item.id);

  async function verificarLike(){
    //console.log(props.item.likes);
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
      <TouchableOpacity onPress={changeLikeStatus}>
        <Image source={likeImage} />
      </TouchableOpacity>
    </View>
  );
};