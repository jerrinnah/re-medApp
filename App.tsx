import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Booking from './screens/Booking';
import Dashboard from './screens/Dashboard';
import DashOpt from './screens/DashOpt';
import Login from './screens/Login';
import Register from './screens/Register';
import SignUp from './screens/Signup';
import Welcome from './screens/Welcome';
import Meditate from './screens/Meditate';
import Courselist from './screens/Courselist';


export type RootStackParams = {

  SignUp;
  Login;
  Register;
  Dashboard;
  Welcome;
  Booking;
  UserDashboard;
  Meditate;
  Courselist;  
}

const RootStack = createNativeStackNavigator<RootStackParams>();

const App = () => {
  return (
    <NavigationContainer>

      <RootStack.Navigator screenOptions={
        {headerShown: false}
      } >
        
        <RootStack.Screen name='SignUp' component={SignUp} />
        <RootStack.Screen name='Login' component={Login} />
        <RootStack.Screen name='Register' component={Register} />
        <RootStack.Screen name='Dashboard' component={DashOpt} />
        <RootStack.Screen name='Welcome' component={Welcome} />
        <RootStack.Screen name='Booking' component={Booking} />
        <RootStack.Screen name='UserDashboard' component={DashOpt} />
        <RootStack.Screen name='Meditate' component={Meditate} />
        <RootStack.Screen name='Courselist' component={Courselist} />


      </RootStack.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



export default App
