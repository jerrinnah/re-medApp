import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";
import { Feather, FontAwesome5 } from '@expo/vector-icons'
import React from "react";

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.avi}>
        <Image style={styles.aviImage} source={require("../assets/avi1.jpg")} />
        <View style={styles.title}>
          <Text>Miss</Text>
          <Text style={styles.name}>Annie Turner</Text>
        </View>
      </View>
      <View style={styles.date}>
        <View style={styles.activity}> 
          <View style={styles.activityBg}>
          <Feather name="activity" size={20} color={'#8E97FD'}/>
          </View>
          <Text style={styles.assTitle}>Assesments</Text>
        </View>
        <View style={styles.scoreRate}>
        <Text style={styles.currentTitle}> Focus on Dreams</Text>
        <Text style={styles.score}> 72%</Text>
        </View>
        <View style={styles.completed}>
          <View style={styles.tabs}></View>
          <View style={styles.tabs} ></View>
          <View style={styles.tabs}></View>
        </View>
        <View style={styles.notesHolder}>
          <Text>NOTES</Text>
          <View>
            <Text style={styles.textline}>-------------------------------------------</Text>
            <Text style={styles.textline}>-------------------------------------------</Text>
            <Text style={styles.textline}>-------------------------------------------</Text>
            <Text style={styles.textline}>-------------------------------------------</Text>
          </View>
        </View>
      </View>
      <View></View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    paddingTop: 80,
  },
  circle: {
    height: 400,
    width: 500,
    borderRadius: 250,
    backgroundColor: "#8E97FD",
    bottom: 350,
  },
  avi: {
    height: 120,
    width: '90%',
    borderRadius: 10,
    // backgroundColor: "red",
    flexDirection:'row',
    alignItems:'center',
    marginTop:30,
  },
  aviImage: { 
    height: 100, 
    width: 100, 
    borderRadius: 20,
   
  },
  title:{
    width:300,
    paddingLeft:10,
  },
  name:{
    fontSize:25,
    fontWeight:'bold'
  },
  date:{
    height:'30%',
    width:'90%',
    backgroundColor:'#8E97FD',
    borderRadius:20,
    marginTop:'10%',
    alignItems:'center'
    
  },
  activityBg:{
    height:30,
    width:30,
    borderRadius:9,
    backgroundColor:'white',
    justifyContent:'center',
    alignContent:'center',
    marginLeft:10,
    marginTop:10,
  },
  activity:{
    flexDirection:'row',
    width:'90%',
    padding:'2%',
  },
  assTitle:{
    color:'white',
    paddingLeft:10,
    paddingTop:15,
  },
  score:{
    fontSize:80,
    fontWeight:'bold',
    color:'white'
  },
  scoreRate:{
    width:'100%',
    justifyContent:'center',
    alignItems:'center'
  },
  currentTitle:{
    color:'white',
    marginBottom:-10,
  },
  tabs:{
    height:'70%',
    width: '25%',
    borderRadius: 20,
    backgroundColor:'lightgrey',
    padding:10,
    margin:10,
  },
  completed:{
    flexDirection:'row',
    height:130,
    width:'100%',
    // backgroundColor:'red',
    justifyContent:'center'

  },

  notesHolder:{
    width:'90%',
    // backgroundColor:'red',
   
  },

  textline:{
    color:'lightgrey'
  }

});
