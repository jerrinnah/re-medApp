import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'


interface IAudio{
    audioTitle: string; 
    audioTime: string;
}

const playIcon= require('../../assets/playbtn.png')

const AudioList = ({audioTitle, audioTime }: IAudio) => {
  return (
   <>
   
   <View>
       <View style={styles.audiolist}>
        <Image source={playIcon} />
        <View style={styles.audioTitle}>
          <Text style={styles.audionName}>{audioTitle}</Text>
          <Text style={styles.audioTime}>{audioTime}</Text>
        </View>
      </View>

      <View
        style={{
          borderBottomColor: "lightgrey",
          width: 300,
          justifyContent: "center",
          marginTop: 10,
          marginLeft: 40,
        }}
      />

<View
        style={{
          borderBottomColor: "lightgrey",
          borderBottomWidth: StyleSheet.hairlineWidth,
          width: 300,
          justifyContent: "center",
          marginTop: 10,
          marginLeft: 40,
        }}
      />
    </View>
   
   </>
  )
}

export default AudioList


const styles = StyleSheet.create({
    content: {
      flex: 1,
      // backgroundColor:'blue'
    },
    topBg: {
      height: 250,
      width: "100%",
      resizeMode: "cover",
      borderRadius: 20,
    },
    greetContainer: {
      justifyContent: "center",
      height: 50,
    },
    greet: {
      fontSize: 30,
      fontWeight: "bold",
      paddingTop: 10,
    },
    course: {
      width: 300,
      paddingLeft: 10,
      paddingTop: 20,
      justifyContent: "center",
    },
    courseTitle: {
      fontSize: 13,
      fontWeight: "200",
    },
    coursedetails: {
      paddingTop: 10,
      fontWeight: "200",
    },
    favContainer: {
      flexDirection: "row",
      marginTop: 10,
    },
    favText: {
      fontSize: 12,
    },
    favIcon: {
      height: 15,
      width: 15,
    },
    courseInfo: {
      height: 30,
      width: 300,
      flexDirection: "row",
      justifyContent: "space-between",
    },
    Narrator: {
      fontSize: 15,
      fontWeight: "bold",
      paddingTop: 18,
    },
    voicenarator: {
      flexDirection: "row",
      width: 300,
      justifyContent: "space-around",
      paddingTop: 20,
    },
    male: {
      fontSize: 20,
      color: "#8E97FD",
    },
    female: {
      fontSize: 20,
      color: "grey",
    },
    audiolist: {
      // backgroundColor:'red',
      flexDirection: "row",
      paddingLeft: 30,
      // marginRight: 50,
      paddingTop: 15,
    },
    audioTitle: {
      paddingLeft: 30,
    },
    audionName: {
      fontSize: 16,
      marginBottom: -3,
    },
    audioTime: {
      fontSize: 10,
    },
  });
  