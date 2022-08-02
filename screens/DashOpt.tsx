import { View, Text, StyleSheet, Pressable, Image } from 'react-native'
import React from 'react'
import { Feather, FontAwesome, FontAwesome5 } from '@expo/vector-icons'
import DashHome from './DashHome'
import Menu from '../components/Menu'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Sleep from './Sleep'
import Meditate from './Meditate'
import Music from './Music'
import Profile from './Profile'
import TabbarIcon from '../components/TabbarIcon'
import NewHome from '../src/Pages/Home'

function HomeScreen() {
  return (
    <View style={{ flex: 1, }}>
        <DashHome />
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Sleep/>
    </View>
  );
}


const Tab = createBottomTabNavigator();



const DashOpt = () => {
  return (
      <Tab.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}  >
        <Tab.Screen  name="Home" component={DashHome} options={{
          tabBarIcon: ({ focused }) => <TabbarIcon focused={focused} iconName="home" />
        }}  />
        <Tab.Screen name="Sleep" component={Sleep} options={{
          tabBarIcon: ({ focused }) => <TabbarIcon focused={focused} iconName="clock" />
        }} />
        <Tab.Screen name="Meditate" component={Meditate} options={{
          tabBarIcon: ({ focused }) => <TabbarIcon focused={focused} iconName="bed" />
        }} />
        <Tab.Screen name="Music" component={Music} options={{
          tabBarIcon:({ focused }) => <TabbarIcon focused={focused} iconName="music" />
        }} />
        <Tab.Screen name="Profile" component={Profile}  options={{
          tabBarIcon: ({ focused }) => <TabbarIcon focused={focused} iconName="user" />
        }} />
      </Tab.Navigator>
  );
}



const styles = StyleSheet.create({

  grey: {
    color: '#A0A3B1'
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'center',
    paddingHorizontal: 0,
    width: 400,
  },
  pager: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    backgroundColor: 'green'

  },
  tabNav: {
    width: '100%',
    height: 100,
    backgroundColor: 'blue',
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
export default DashOpt;