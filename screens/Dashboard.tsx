import { View, Text, ImageBackground, Image, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import bgImg from '../assets/Union.png'
import Course from '../components/course'
import { FlatList } from 'react-native'
import { useState } from 'react'
import { useEffect } from 'react'
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParams } from '../App'



const courses = [
  {
    id: 0,
    title: 'Improve Performance',
    image: require('../assets/float.png'),
    duration: '2 weeks'

  },
  {
    id: 1,
    title: 'Reduce Anxiety',
    image: require('../assets/peach.png/'),
    duration: '2 weeks'
  },
  {
    id: 2,
    title: 'Better Sleep',
    image: require('../assets/sleepb.png/'),
    duration: '4 weeks'
  },
  {
    id: 3,
    title: 'Personal Growth',
    image: require('../assets/green.png/'),
    duration: '4 weeks'
  },
  {
    id: 4,
    title: 'More Focus',
    image: require('../assets/blue.png/'),
    duration: '4 weeks'
  },
  {
    id: 5,
    title: 'Happiness',
    image: require('../assets/orangw.png/'),
    duration: '4 weeks'
  },
  {
    id: 5,
    title: 'Time',
    image: require('../assets/blue.png/'),
    duration: '4 weeks'
  },
  {
    id: 6,
    title: 'Work Balance',
    image: require('../assets/orangw.png/'),
    duration: '4 weeks'
  },

];







const Dashboard = () => {
  

const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.bgImg} source={bgImg} >

        <View style={styles.textContainer}>

          <Text style={styles.headTitle}>
            What Brings you
          </Text>
          <Text style={styles.paraTitle}>
            to Silent Moon?
          </Text>
          <Text style={styles.paraText}>
            choose a topic to focuse on:
          </Text>

        </View>

        <View style={styles.flatList}>
        <View style={styles.skip}>
            <Pressable style={styles.skipBtn}  onPress={() => navigation.navigate('Booking')}>
              <Text> SKIP </Text>
            <Ionicons
              style={styles.check}
              name="chevron-forward-outline"
              size={20}
              color="black"
            />
            </Pressable>
            
          </View>
          <FlatList
            data={courses}
            renderItem={({ item }) => {
              return <Course info={item} />;
            }}
            keyExtractor={(course) => course.id.toString()}
            numColumns={2}
          />
         

        </View>

      </ImageBackground>

    </View>
  )
}

const styles = StyleSheet.create({


  container: {
    // flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  skipBtn:{
    flexDirection:'row',
    alignItems:'center',

  },
  textContainer: {
    right: 90,
    top: 20,
  },
  headTitle: {
    fontSize: 23,
    marginLeft: 20,
    fontWeight: "bold"
  },
  bgImg: {
    top: 100,
    height: 800,
    width: 400,
    justifyContent: 'center',
    alignItems: 'center'
  },
  paraTitle: {
    fontSize: 22,
    marginLeft: 20,
  },
  paraText: {
    fontSize: 17,
    paddingLeft: 20,
  },
  flatList: {
    height: 800,
    width: 390,
    // backgroundColor: 'blue',
    top: 60,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    bottom: 90,
  },
  skip:{
    height:20,
    width:200,
    // backgroundColor:'green',
    position:'relative',
    bottom:30,
    right:160,
    flexDirection:'row',
    alignItems:"center",
    justifyContent:'center'
  },
  check: {
    // flexDirection:'row'
    // top: 209,
    // right: 15,
  },
})

export default Dashboard;