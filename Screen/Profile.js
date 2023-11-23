import { AntDesign, Entypo} from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { FlatList, Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

var urluser = 'https://6551c0df5c69a77903290c9a.mockapi.io/User'
export default function App() {
  var rou = useRoute();
  var nav = useNavigation();
  var [data,setData] = useState([]);
  var fc = ()=>{
    fetch(urluser + '/' + rou?.params?.userid )
      .then(res => res.json())
      .then(json =>{
        setData(json)
        console.log(json)
      })
  }
  const logout = () => {
    setData(null);
    nav.navigate('Start');
  };
  useEffect(fc,[])
  return (
    <View style={{width:'100%',height:'100%',alignItems:'center',backgroundColor:'black'}}>
      <View style={{flexDirection:'row',width:350,height:70,alignItems:'center',justifyContent:'space-between'}}>
        <Image source={{uri:data.avatar}} style={{width:60,height:60,borderRadius:100}}/>
        <Text style={{color: 'white', fontSize: 20, fontFamily: 'Arial', fontWeight: '400', wordWrap: 'break-word'}}>
          {data.name}</Text>
        <Pressable onPress={logout}>
          <AntDesign name="logout" size={30} color="white" />
        </Pressable>
      </View>
      <View style={{position:'relative',alignItems:'center',width:352,height:300}}>
      <Image source={{ uri: 'https://picsum.photos/352/190' }} style={{ position: 'absolute', width: 352, height: 190 }} />
      <View style={{ position: 'absolute',marginTop:102}}>
        <Image source={{ uri: data.avatar }} style={{ width: 176, height: 176, borderRadius: 1000}} />
      </View>
      </View>
      <Text style={{color: 'white', fontSize: 25, fontFamily: 'Arial', fontWeight: '700', wordWrap: 'break-word'}}>
        {data.name}</Text>
      <View style={{width:390,height:55,flexDirection:'row',alignItems:'center',justifyContent:'space-around',marginTop:220}}>
        <Pressable onPress={()=>nav.navigate('Home')}>
          <Entypo name="home" size={40} color="white" />
        </Pressable>
        <Pressable onPress={()=>nav.navigate('Search',{id: user.id})}>
          <AntDesign name="search1" size={40} color="white" />
        </Pressable>
        <Pressable>
          <Image source={{uri:data.avatar}} style={{width:40,height:40,borderRadius:100}} />
        </Pressable> 
      </View>
    </View>
  );
}