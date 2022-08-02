import { View, Text } from 'react-native'
import React from 'react'


interface IText {

    focused: boolean;
    title: string;
    color: string;

}


const TextFocus = ({focused, title, color} : IText) => {
if (focused) {
    <Text style={{color:'#8E97FD', fontSize:15}}>{title}</Text>
}

  return (
    <View>
      <Text>TextFocus</Text>
    </View>
  )
}

export default TextFocus