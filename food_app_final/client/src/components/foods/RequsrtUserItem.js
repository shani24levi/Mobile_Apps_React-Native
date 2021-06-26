import React from 'react';
import { Avatar } from "react-native-elements";


function RequsrtUserItem(props) {
  const { id, img, name } = props;

  return (
    <Avatar key={id}
      activeOpacity={0.2}
      avatarStyle={{}}
      containerStyle={{ backgroundColor: "#BDBDBD" }}
      imageProps={{}}
      onLongPress={() => alert("onLongPress")}
      onPress={() => alert("onPress")}
      overlayContainerStyle={{}}
      placeholderStyle={{}}
      rounded
      size="medium"
      source={{ uri: `https:${img}` }}
      title={name}
      titleStyle={{}}
    />
  );
}

export default RequsrtUserItem;