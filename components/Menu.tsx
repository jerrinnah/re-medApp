import { StyleSheet, Text, View, Pressable, Image , TouchableOpacity} from 'react-native'
import { Feather } from '@expo/vector-icons'
import React from 'react'







const Menu = () => {
  return (
    
      
      <View style={styles.tabNav} >

        <TouchableOpacity style={styles.tabbarItem} 
        onPress={() => {

        } } >
          <Feather name="home" size={20} color="#A0A3B1" />
          <Text style={styles.grey}>Home</Text>
        </TouchableOpacity>

        <Pressable style={styles.tabbarItem}>
          <Feather name="moon" size={20} color="#A0A3B1" />
          <Text style={styles.grey}>Sleep</Text>
        </Pressable>

        <Pressable style={styles.tabbarItem}>
          <Image source={require('../assets/meditateIcon.png')} />
          <Text style={[styles.grey, styles.btnIcon]}>Meditate</Text>
        </Pressable>

        <Pressable style={styles.tabbarItem}>
          <Image source={require('../assets/musicIcon.png')} />
          <Text style={[styles.grey, styles.btnIcon]}>Music</Text>
        </Pressable>

        <Pressable style={styles.tabbarItem}>

          <Image source={require('../assets/userIcon.png')} />
          <Text style={[styles.grey, styles.btnIcon]}  >User</Text>
        </Pressable>

      </View>

  )
}

export default Menu

const styles = StyleSheet.create({
    grey: {
        color: '#A0A3B1'
      },

  tabNav: {
    width: '100%',
    height: 100,
    backgroundColor: 'green',
    flexDirection: 'row',
    paddingHorizontal: 20,
  },

  tabbarItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'

  },
  btnIcon: {
    paddingTop: 10,
  }
})