import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Booking = () => {

    const navigation = useNavigation();

  return (
    <View style={styles.remindPage}>
      <View>
        <Text style={styles.textTitle}>
          {" "}
          What time would you like to meditate?
        </Text>
        <Text style={styles.textSubTitle}>
          Any time you can choose but We recommend first thing in th morning.
        </Text>
      </View>
      <View style={styles.calander}>
        <Image source={require("../assets/calender.png")} />
      </View>
      <View>

        <Text style={styles.dayContainer}>
          <Text style={styles.textTitle}>

            Which day would you like to meditate?
          </Text>
          Everyday is best, but we recommend picking at least five.
        </Text>

      </View>
      <Image style={styles.dateImg} source={require('../assets/dates.png')} />

      <Pressable style={styles.btnLogin} onPress={() => navigation.navigate('UserDashboard')} >
        <Text style={[styles.btnText, styles.black]}> SAVE </Text>

      </Pressable>
    </View>

  );
}


const styles = StyleSheet.create({
  // Text colors


  white: {
    color: 'white'
  },
  grey: {
    color: 'grey'
  },
  black: {
    color: 'black'
  },



  // Text colors

  remindPage: {
    flex: 1,
    // backgroundColor:'red',
    justifyContent: "flex-start",
    paddingTop: 90,
    alignItems: "center",
  },
  textTitle: {
    fontSize: 20,
    width: 200,
    textAlign: "left",
    fontWeight: "bold",
    marginRight: 160,
  },
  textSubTitle: {
    fontSize: 13,
    width: 320,
    textAlign: "left",
  },
  calander: {
    paddingTop: 20,
    marginTop: 50,
  },
  dateImg: {
    height: 30,
    marginLeft: 20,
    width: 350,
    padding: 10,
    marginTop: 50,
  },
  dayContainer: {
    top: 20,
  },

  btnLogin: {
    height: 60,
    width: 350,
    backgroundColor: '#8E97FD',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: "center",
    borderRadius: 35,
    top: 100,

  },

  btnText: {
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 13,
  },
});

export default Booking