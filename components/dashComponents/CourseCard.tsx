import { StyleSheet, Text, View, Image, ImageSourcePropType } from 'react-native'
import React from 'react'
import { useState } from 'react'

interface IProps {
    image: ImageSourcePropType;
    title: string;
    subtitle: string;
    duration: string;
    color: string;
    img: Element;
}




const CourseCard = ({image, title, subtitle, duration, color, img }: IProps ) => {
    return (
        <View style={{...styles.container, backgroundColor: color || 'grey', }}>
            <View style={styles.imgTop}>
                {img}
            </View>
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
        borderRadius: 20,
        justifyContent: 'center',
        marginRight:10,
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
        height:70,
        width: '100%',
        alignItems: 'flex-end',
        justifyContent:'flex-start',
        paddingHorizontal: 10,
        // backgroundColor: 'red',
        position:'absolute',
        top: 20,
        left:10,
        borderRadius:10,
    }
})