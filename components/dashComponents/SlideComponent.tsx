import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const SlideComponent = ({ image, title, category, duration }) => {
  return (
    <View style={styles.imgbg}>
      <Image source={image} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.catHolder}>
        <Text style={styles.category}>{category}</Text>
        <Text style={styles.category}>{duration}</Text>
      </View>
    </View>
  );
};

export default SlideComponent;

const styles = StyleSheet.create({
  imgbg: {
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 20,
    // width:300,
    // backgroundColor:'red'
  },

  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
  catHolder: {
    flexDirection: "row",
    justifyContent: "space-between",
    // paddingLeft:8,
    paddingRight: 23,
  },
  category: {
    fontSize: 9,
  },
});
