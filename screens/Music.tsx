import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";
import React from "react";
import { style } from "../src/Pages/Home/style";
import { Feather } from "@expo/vector-icons";

const Music = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.bgMusic}
        resizeMode="cover"
        source={require("../assets/bgMusic.png")}
      >
        <View style={styles.content}>
          <View style={styles.xIcon}>
            <Feather name="x" size={20} color="grey" />
          </View>
          <View style={styles.otherIcons}>
            <View style={styles.luvIcon}>
              <Feather name="heart" size={20} color="white" />
            </View>
            <View style={styles.dIcon}>
              <Feather name="download" size={20} color="white" />
            </View>
          </View>
        </View>

        <View style={styles.audioContainer}>
          <Text style={styles.audioTitle}>Focus Attention</Text>
          <Text>7 DAYS OF CALM</Text>
        </View>

        <View style={styles.controls}>
          <Image source={require("../assets/prev.png")} />
          <Image source={require("../assets/pause.png")} />
          <Image source={require("../assets/nxt.png")} />
        </View>
        <Image style={styles.track} source={require("../assets/track.png")} />
        <View style={styles.timer}>
          <Text>1:30</Text>
          <Text>15.00</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Music;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  bgMusic: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  content: {
    width: "100%",
    height: 20,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "flex-start",
  },
  xIcon: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: "white",
    top: 60,
    left: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  otherIcons: {
    flexDirection: "row",
    top: 60,
    right: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  luvIcon: {
    marginLeft: 10,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: "#B6B8BF",
  },
  dIcon: {
    marginLeft: 10,
    marginRight: 10,
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: "#B6B8BF",
    justifyContent: "center",
    alignItems: "center",
  },

  audioContainer: {
    marginTop: 290,
    height: 70,
    width: 300,
    justifyContent: "center",
    alignItems: "center",
  },

  audioTitle: {
    fontSize: 30,
    fontWeight: "bold",
  },
  controls: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    paddingTop: "10%",
  },
  track: {
    marginTop: "10%",
    height: 10,
    width: "80%",
  },
  timer:{
    flexDirection:'row',
    width:'80%',
    justifyContent:'space-between',
  }
});
