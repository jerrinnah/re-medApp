import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import React from "react";
import CourseCard from "../components/dashComponents/CourseCard";
import DailyThought from "../components/dashComponents/DailyThought";
import SlideComponent from "../components/dashComponents/SlideComponent";
import CourseCard2 from "../components/dashComponents/CourseCard2";

const image = require("../assets/onion.png");
const image2 = require("../assets/songguy.png");
const recommendImg = require("../assets/happiness.png");
const guyMed = require("../assets/guyMed.png");
const orange = require("../assets/hess.png");


const DashHome = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-full.png")} />
      <View style={styles.welcomeMsg}>
        <View style={styles.textHead}>
          <Text style={styles.boldText}>Good Morning, User</Text>
          <Text style={styles.lightText}>We Wish you have a good day</Text>
        </View>

        <View style={styles.courseContainer}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <CourseCard
              img={<Image style={{ width: 50, height: '100%' }} source={image} resizeMode="cover" />}
              color="#8E97FD"
              title={"Basic"}
              subtitle={"COURSE"}
              duration={"3-5 MINS"}
            />
            <CourseCard
              img={<Image style={{ width: 50, height: 60 }} source={image2} resizeMode="stretch" />}
              color="#FFC97E"
              image={image2}
              title={"Relaxation"}
              subtitle={"MUSIC"}
              duration={"3-5 MINS"}
            />
          </ScrollView>
        </View>
      </View>

      <View style={styles.dailythought}>
        <DailyThought />
      </View>
      <View style={styles.slideComp}>
        <Text style={styles.slideHeader}>Recommended for you</Text>

        <View style={styles.components}>
         <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
         <SlideComponent
            image={recommendImg}
            title={"Happiness"}
            category={"MEDITATION"}
            duration={"3-10MINS"}
          />
          <SlideComponent
            image={guyMed}
            title={"Focus"}
            category={"STUDY"}
            duration={"2-7MINS"}
          />
          <SlideComponent
            image={orange}
            title={"Relaxation"}
            category={"PEACE"}
            duration={"5-14MINS"}
          />
         </ScrollView>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    // bottom:30,
    paddingTop: 10,
  },
  logo: {
    height: 25,
    width: 150,
    bottom: 20,
    top: 50,
  },
  welcomeMsg: {
    padding: 6,
  },
  textHead: {
    left: 20,
    bottom: 10,
    top: 70,
  },
  boldText: {
    fontWeight: "bold",
    fontSize: 20,
  },
  lightText: {
    fontWeight: "100",
  },
  courseContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    // backgroundColor: 'red',
    width: "100%",
    paddingLeft: 5,
    paddingRight: 5,
    top: 100,
  },
  dailythought: {
    justifyContent: "center",
    right: 115,
    top: 120,
  },
  slideComp: {
    top: 150,
  },
  slideHeader: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 5,
    left: 60,
  },
  components: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    padding: 10,
  },
});

export default DashHome;
