import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'


const DailyThought = () => {
    return (
        <View style={styles.container}>
            <ImageBackground style={styles.bgsmall} source={require('../../assets/thoughtDaily.png')} resizeMode='cover'>
               
               {/* <Image source={require('../../assets/thoughtDaily.png')}/> */}
                <View style={styles.bgText}>
                    <Text style={styles.thoughtText}>
                        Daily Thought
                    </Text>
                    <Text style={styles.smllTxt}>MEDITATION 3-10MINS</Text>
                </View>
            </ImageBackground>

        </View>
    )
}

export default DailyThought

const styles = StyleSheet.create({
    container: {

        width: '90%',
        // width:500,
        backgroundColor: 'grey',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },

    bgsmall: {
        height: 90,
        width: '100%',
        // backgroundColor: 'green',
        // borderRadius: 20,
        // resizeMode:'cover'


    },
    thoughtText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    smllTxt: {
        fontSize: 10,
        color: 'white'
    },
    bgText: {
        flex: 1,
        left: 15,
        // backgroundColor: 'blue',
        justifyContent: 'center'
    },
})