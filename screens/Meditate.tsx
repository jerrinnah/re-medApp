import { View, Text, StyleSheet, Image, ImageBackground, ScrollView } from 'react-native'
import React from 'react'
import Audio from '../components/dashComponents/Audio'


const image1 = require('../assets/blueSky.png')
const image2 = require('../assets/winter.png')
const image3 = require('../assets/forest.png')
const image4 = require('../assets/sunset.png')

const Meditate = () => {
  return (
    <View style={styles.container}>

      <View style={styles.textContent}>
        <Text style={styles.title}>Meditate</Text>
        <Text style={styles.titleDes}>we can learn how to recognize when our minds are doing their normal everyday acrobatics.</Text>
      </View>

      <View style={styles.mediOptions}>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
        <View style={styles.iconHolder}>
          <View style={styles.box}>
            <Image style={styles.imgIcon} source={require('../assets/allOp.png')} />
          </View>
          <Text style={styles.iconText}>
            All
          </Text>
        </View>

        <View style={styles.iconHolder}>
          <View style={styles.boxed}>
            <Image style={styles.imgIcon} source={require('../assets/heart.png')} />
          </View>
          <Text style={styles.iconText}>
            Fav
          </Text>
        </View>
        <View>

        </View>

        <View style={styles.iconHolder}>
          <View style={styles.boxed}>
            <Image style={styles.imgIcon} source={require('../assets/sadFace.png')} />
          </View>
          <Text style={styles.iconText}>
            Anxious
          </Text>
        </View>

        <View style={styles.iconHolder}>
          <View style={styles.boxed}>
            <Image style={styles.imgIcon} source={require('../assets/sleepOp.png')} />
          </View>
          <Text style={styles.iconText}>
            Sleep
          </Text>
        </View>

        <View style={styles.iconHolder}>
          <View style={styles.boxed}>
            <Image style={styles.imgIcon} source={require('../assets/kidFace.png')} />
          </View>
          <Text style={styles.iconText}>
            Kids
          </Text>
        </View>

        </ScrollView>


      </View>


      <ImageBackground style={styles.calmBg} source={require('../assets/calm.png')}>
        <View style={styles.audioHolder}>
          <View>
            <Text style={styles.audioTitle}>
              Daily Calm
            </Text>
            <View style={styles.audioDes}>
              <Text style={styles.audioDetail}>APR 30</Text>
              <Text style={styles.audioDetail}>. PAUSE PRACTICE </Text>
            </View>
          </View>

          <View>

          </View>
        </View>
      </ImageBackground>

      <View style={styles.audioComponents}>

        <ScrollView showsHorizontalScrollIndicator={false} horizontal={false} style={styles.scrollView}>
         
         <View style={styles.scrollWrap}>
          <Audio
            image={image1}
            title='7 Days of Calm' />
          <Audio
            image={image2}
            title='Anxiety' />
          <Audio
            image={image2}
            title='Anxiety' />
          <Audio
            image={image2}
            title='Anxiety' />
          <Audio
            image={image2}
            title='Anxiety' />
         </View>
        </ScrollView>

       
    

      </View>




    </View>
  )
}

export default Meditate

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    paddingTop: 50,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'

  },
  textContent: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 16,
  },
  titleDes: {
    textAlign: 'center',
  },
  box: {
    height: 65,
    width: 65,
    backgroundColor: '#8E97FD',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,

  },
  boxed: {
    height: 65,
    width: 65,
    backgroundColor: '#A0A3B1',
    borderRadius: 25,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  mediOptions: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 9,
    marginTop: 20,


  },
  imgIcon: {
    height: 25,
    width: 25,
  },
  iconHolder: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
  },
  iconText: {
    marginTop: 5,
    fontSize: 15,
    fontWeight: '400'

  },
  calmBg: {
    height: 110,
    width: 340,
    resizeMode: 'cover',
    borderRadius: 20,
    backgroundColor: '#ECD3C2',
    marginTop: 20,
    overflow: 'hidden',
    justifyContent: 'center',
    // alignItems:'center',
    paddingLeft: 15,



  },
  bgContainer: {
    width: 350,
    height: 90,
    top: 10,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',

  },

  audioDes: {
    flexDirection: 'row',
    width: 170,
    justifyContent: 'space-around',
    fontWeight: 200,
    paddingTop: 7,
  },

  audioTitle: {
    fontSize: 20,
    fontWeight: 'bold',

  },
  audioDetail: {
    fontSize: 13,
  },

  audioHolder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 15,
  },

  audioComponents: {
    margin: 15,
    // backgroundColor: 'red',
    height: 390,
    justifyContent: 'center',
    width:350,

  },
  scrollView: {
    width: '100%',
  },
  verticalScroll:{
    marginBottom:50,
  },
  scrollWrap:{
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 50,
  }
})