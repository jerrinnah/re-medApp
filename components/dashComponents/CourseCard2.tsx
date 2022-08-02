import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { useState } from 'react'




const CourseCard = ({image, title, subtitle, duration,  }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.imgTop} source={image}/>
            <View style={styles.midText}>
                <Text style={styles.midHeader}>{title}</Text>
                <Text>{subtitle}</Text>
            </View>
            <View style={styles.duration}>
                <Text style={styles.timer}>
                    {duration}
                </Text>
               <View style={styles.timerBtn}>
               <Text style={styles.start} >
                    START
                </Text>
               </View>
            </View>
        </View>
    )
}

export default CourseCard

const styles = StyleSheet.create({
    container: {
        height: 200,
        width: 170,
        backgroundColor: '#FFC97E',
        borderRadius: 20,
        justifyContent: 'center',
        marginRight:20,
    },
    midText: {
        left: 15,
    },
    midHeader: {
        fontWeight: 'bold',
        fontSize: 17,
        marginTop: -5,
    },
    duration:{
        flexDirection:'row',
        top:60,
        justifyContent:'space-between',
        alignItems:'center',
        paddingLeft:10,
        paddingRight:10,
    },
    timer:{
        fontSize:10,
    },
    start:{
        fontSize:10,
        padding:2
     
    },
    timerBtn:{
        height:25,
        width:60,
        backgroundColor:'white',
        margin:3,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,

       
    },
    imgTop:{
        height:190,
        width:140,
        position:'absolute',
        top:10,
        left:30,
        borderRadius:20,
    }
})