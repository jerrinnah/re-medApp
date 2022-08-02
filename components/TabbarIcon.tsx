import { View, Text } from 'react-native'
import React from 'react'
import { Feather, FontAwesome5 } from '@expo/vector-icons'
import { style } from '../src/Pages/Home/style';

interface IProps {
    focused: boolean;
    color?: string; 
    size?: number;
    iconName: any;
}

export default function TabbarIcon({ focused, iconName }: IProps) {
    if (focused) {
       return (
        <View style={{ justifyContent:'center', alignItems:'center',  width:30, height:30, borderRadius:10, padding:4, backgroundColor:'#8E97FD'}}>
          <FontAwesome5 name={iconName} size={15} color='white' />
        </View>
       )
    }
  return (
    <>
        <FontAwesome5 name={iconName} size={20} color='grey' />    
    </>
  )
}