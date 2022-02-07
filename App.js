
 import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
 import {StatusBar} from 'react-native';
 import Home from './home';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';

 const Stack = createNativeStackNavigator();
 const App = () => {
   return (
     <>
       <StatusBar barStyle='dark-content' hidden />
       <NavigationContainer>
<Stack.Navigator>
  <Stack.Screen
  name="Home"
  component={HomeScreen}
  options={{title:'welcome'}}
  />

  <Stack.Screen
  name="Profile"
  component={profileScreen}
  
  />
</Stack.Navigator>


       </NavigationContainer>
       <Home username='Sports Fan' />
     </>
   );
 };
 
 
 
 export default App;
 