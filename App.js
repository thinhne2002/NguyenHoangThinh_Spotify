import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import  Start  from "./Screen/Start";
import  Login  from "./Screen/Login";
import  SignUp  from "./Screen/Sign Up";
import  Home from "./Screen/Home";
import  Search  from "./Screen/Search";
import  LikedSong from "./Screen/LikedSong";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Start' component={Start} options={{headerShown:false}}/>
        <Stack.Screen name='Login' component={Login} options={{headerShown:false}}/>
        <Stack.Screen name='Sign Up' component={SignUp} options={{headerShown:false}}/>
        <Stack.Screen name='Home' component={Home} options={{headerShown:false}}/>
        <Stack.Screen name='Search' component={Search} options={{headerShown:false}}/>
        <Stack.Screen name='LikedSong' component={LikedSong} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

