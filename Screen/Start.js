import { AntDesign, Entypo, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {
    const nav = useNavigation();
    return (
    <View style={{flex:1,width:390,height:844,backgroundColor:'#000000',alignItems:'center'}}>
        <Entypo name="spotify" size={80} color="white" style={{marginTop:80,marginBottom: 20}}/>
        <Text style={{width:390,height:78,textAlign: 'center', color: 'white', fontSize: 35, fontFamily: 'Arial', fontWeight: '700', wordWrap: 'break-word'}}>
            Millions of Songs<br/>Free On Spotify!</Text>
        <Pressable onPress={()=>nav.navigate('Login')} style={{alignItems:'center',justifyContent:'center',marginTop:33,width: 280, height: 50, background: '#1DB954', borderRadius: 20}}>
            <Text style={{width: 187, height: 24, textAlign: 'center', color: 'black', fontSize: 15, fontFamily: 'Arial', fontWeight: '700', wordWrap: 'break-word'}}>
                Sign in with Spotify
            </Text>
        </Pressable>
        <Pressable onPress={()=>nav.navigate('Sign Up')} style={{alignItems:'center',justifyContent:'center',marginTop:16,width: 280, height: 50, background: '#FFFFFF', borderRadius: 20}}>
            <Text style={{width: 187, height: 24, textAlign: 'center', color: 'black', fontSize: 15, fontFamily: 'Arial', fontWeight: '700', wordWrap: 'break-word'}}>
                Sign up
            </Text>
        </Pressable>
        <Pressable style={{alignItems:'center',marginTop:39,width: 280, height: 50, background: 'black', borderRadius: 20, border: '1px white solid',flexDirection:'row'}}>
            <Feather name="smartphone" size={31} color="white" style={{marginLeft:17,marginRight:16}}/>
            <Text style={{width: 164, height: 31, textAlign:'center',paddingTop:9, color: 'white', fontSize: 12, fontFamily: 'Arial', fontWeight: '700', wordWrap: 'break-word'}}> 
                Continue with your number
            </Text>
        </Pressable>
        <Pressable style={{alignItems:'center',marginTop:11,width: 280, height: 50, background: 'black', borderRadius: 20, border: '1px white solid',flexDirection:'row'}}>
            <AntDesign name="google" size={24} color="red" style={{marginLeft:17,marginRight:16}}/>
            <Text style={{width: 164, height: 31, textAlign:'center',paddingTop:9, color: 'white', fontSize: 12, fontFamily: 'Arial', fontWeight: '700', wordWrap: 'break-word'}}> 
                Continue with Google
            </Text>
        </Pressable>
        <Pressable style={{alignItems:'center',marginTop:11,width: 280, height: 50, background: 'black', borderRadius: 20, border: '1px white solid',flexDirection:'row'}}>
            <Entypo name="facebook-with-circle" size={31} color="blue" style={{marginLeft:17,marginRight:16}}/>
            <Text style={{width: 164, height: 31, textAlign:'center',paddingTop:9, color: 'white', fontSize: 12, fontFamily: 'Arial', fontWeight: '700', wordWrap: 'break-word'}}> 
                Continue with facebook
            </Text>
        </Pressable>
    </View>
  );
}