import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import React from "react";
import { useState } from "react";
import AudioList from "../components/dashComponents/AudioList";
import TextFocus from "../components/dashComponents/TextFocus";
import { style } from "../src/Pages/Home/style";
import IsMale from "../components/dashComponents/IsMale";
import IsFemale from "../components/dashComponents/IsFemale";

const Sleep = () => {
  const [ismale, setIsMale] = useState(true);

  return (
    <View style={styles.content}>
      <ImageBackground
        style={styles.topBg}
        source={require("../assets/sun.png")}
      ></ImageBackground>

      <View style={styles.greetContainer}>
        <Text style={styles.greet}> Happy Morning</Text>
      </View>
      <View style={styles.course}>
        <Text style={styles.courseTitle}> COURSE</Text>
        <Text style={styles.coursedetails}>
          {" "}
          Ease the mind into a restful night’s sleep with these deep, amblent
          tones.
        </Text>
        <View style={styles.courseInfo}>
          <View style={styles.favContainer}>
            <Image
              style={styles.favIcon}
              source={require("../assets/love.png")}
            />
            <Text style={styles.favText}> 24.32 Favourites</Text>
          </View>
          <View style={styles.favContainer}>
            <Image
              style={styles.favIcon}
              source={require("../assets/headphone.png")}
            />
            <Text style={styles.favText}> 21k Listening</Text>
          </View>
        </View>
        <View>
          <Text style={styles.Narrator}>Pick a Narrator</Text>

          <View style={styles.voicenarator}>
            <Text onPress={() => setIsMale(ismale)} style={styles.male}>
              MALE
            </Text>

            <Text onPress={()=> setIsMale(!ismale)} style={styles.female}>
              FEMALE
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          borderBottomColor: "grey",
          borderBottomWidth: StyleSheet.hairlineWidth,
          width: 600,
          justifyContent: "center",
          marginTop: 10,
        }}
      />
      <View>
        
          <ScrollView>
            {ismale ? (
              <>
                <AudioList audioTitle={"Male Winter"} audioTime={"7 MINS"} />
                <AudioList audioTitle={"Male Pacing"} audioTime={"14 MINS"} />
                <AudioList audioTitle={"Male Growth"} audioTime={"3 MINS"} />
                <AudioList audioTitle={"Male Pattern"} audioTime={"9 MINS"} />
              </>
            ):
            <ScrollView>
            {!ismale && (
              <>
                <AudioList audioTitle={"Female Winter"} audioTime={"7 MINS"} />
                <AudioList audioTitle={"Female Pacing"} audioTime={"14 MINS"} />
                <AudioList audioTitle={"Female Growth"} audioTime={"3 MINS"} />
                <AudioList audioTitle={"Female Pattern"} audioTime={"9 MINS"} />
              </>
            )}
          </ScrollView>}
          </ScrollView>
         
      
      </View>
      <View>
       
      </View>
    </View>
  );
};

export default Sleep;

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
    flexDirection: "row",
    paddingLeft: 30,
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
