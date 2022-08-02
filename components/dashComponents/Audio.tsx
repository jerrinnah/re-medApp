import { View, Text, ImageBackground, StyleSheet, Dimensions } from 'react-native'
import React from 'react'

const { height: HEIGTH, width: WIDTH } = Dimensions.get('screen');


const Audio = ({image, title}) => {
   
    
  return (
    <View>
      <ImageBackground style={styles.comBg} source={image}>
            <Text style={styles.comText}>{title}</Text>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
    comBg:{
        height:169,
        width: (43 * WIDTH) / 100,
        borderRadius:20,
        justifyContent:'flex-end',
        alignItems:'center',
       overflow:'hidden',
       margin:5,
    },
    comText:{
        bottom:13,
        fontWeight:'bold',
        color:'white'
    }
})

export default Audio

