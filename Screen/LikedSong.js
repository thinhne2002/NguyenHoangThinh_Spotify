import { AntDesign, Entypo, Feather, FontAwesome, Ionicons, SimpleLineIcons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Image,  Pressable,  StyleSheet, Text, TextInput, View } from 'react-native';

var data = [];
var liked = [];
var url = 'https://6551c0df5c69a77903290c9a.mockapi.io/User'
export default function App() {
  var nav = useNavigation();
  var rou = useRoute();
  var [data,setData] = useState([]);
  var [filter, setFilter] = useState('');
  var id = rou?.params?.id
  var fc = ()=> {
    fetch(url + '/' + id)
      .then(response => response.json())
      .then(json => {
        data = json,
        setData(data)
        console.log(data)
        liked = data.LikedSong
        console.log(data.LikedSong.length)
      });
  }
  useEffect(fc,[])
  return (
    <View style={{background: 'linear-gradient(180deg, rgba(131, 43, 236, 1) 50%, rgba(0, 0,0, 1) 100%)'}}>
      <View style={{marginLeft:16,width:363,height:35,flexDirection:'row',alignItems:'center',marginTop:19}}>
        <Pressable onPress={()=>nav.navigate('Home')}>
          <Ionicons name="arrow-back-sharp" size={33} color="black" />
        </Pressable>
        <View style={{width:247,height:33,alignItems:'center',marginLeft:8,backgroundColor:'#9370DB',flexDirection:'row'}}>
          <Ionicons name="search-circle-sharp" size={26} color="green" style={{marginLeft:5}}/>
          <TextInput placeholder='Find in Liked Song' style={{width:187,height:26,color: 'rgba(255, 255, 255, 0.60)', fontSize: 15, fontFamily: 'Arial', fontWeight: '700', wordWrap: 'break-word',alignItems:'center',marginLeft:15}}></TextInput>
        </View>
        <Pressable style={{width:65,height:33,alignItems:'center',justifyContent:'center',backgroundColor:'#9370DB',marginLeft:10}}>
          <Text style={{textAlign: 'center', color: 'white', fontSize: 15, fontFamily: 'Arial', fontWeight: '700', wordWrap: 'break-word'}}>
            Search</Text>
        </Pressable>
      </View>
      <Text style={{marginLeft:16,marginTop:15,width:92,height:25,color: 'white', fontSize: 15, fontFamily: 'Arial', fontWeight: '700', wordWrap: 'break-word'}}>
        Liked Song</Text>
      <Text style={{marginLeft:16,width:82,height:15,color: 'rgba(255, 255, 255, 0.60)', fontSize: 12, fontFamily: 'Arial', fontWeight: '700', wordWrap: 'break-word'}}>
        {liked.length} Songs</Text>
      <View style={{flexDirection:'row',marginLeft:27,alignItems:'center'}}>
        <Pressable style={{width:30,height:30,marginRight:26,alignItems:'center',justifyContent:'center'}}>
          <FontAwesome name="arrow-circle-down" size={25} color="#00FF33" style={{}} />
        </Pressable>
        <Text style={{width:207,marginRight:36,height:20,color: 'white', fontSize: 19, fontFamily: 'Arial', fontWeight: '700', wordWrap: 'break-word'}}>
          Your Liked Song</Text>
        <Pressable style={{width:50,height:50,alignItems:'center',justifyContent:'center',backgroundColor:'#1DB954',borderRadius:60}}>
          <Entypo name="controller-play" size={25} color="white" />
        </Pressable>
      </View>
      <Text style={{width:200,height:30,color:'white',marginTop:10,display:'flex',alignItems:'center',fontFamily:'Arial',fontWeight:'700',fontSize:17, marginLeft:16}}>Music</Text>
      {liked.map((item)=>{
        if(item.type === 'music' && item.like === true){
          return(
            <View>
              <Pressable style={{width:355,marginLeft:16,marginTop:10,height:50,flexDirection:'row',alignItems:'center'}}>
              <Image source={{uri:item.theme}} style={{width:50,height:50,borderRadius:6}}/>
              <View style={{width:226,height:50,marginLeft:12,justifyContent:'space-around'}}>
              <Text style={{width:207,height:18,color: 'white', fontSize: 15, fontFamily: 'Arial', fontWeight: '700', wordWrap: 'break-word'}}>{item.name}</Text>
              <Text style={{width:207,height:15,color: 'rgba(255, 255, 255, 0.50)', fontSize: 12, fontFamily: 'Arial', fontWeight: '700', wordWrap: 'break-word'}}>{item.singer}</Text>
              </View>
              <Pressable onPress={()=>{
                var songid = item.id;
                liked.map((item, index) => {
                  if (Array.isArray(item)) {
                    console.log(item[index]);
                  }
                });
              }}>
                <Feather name="x" size={24} color="red" style={{marginRight:15}}/>
              </Pressable>
              <Pressable>
                <AntDesign name="heart" size={24} color="#00FF33" />
              </Pressable>
              </Pressable>
            </View>
          )
        }
      })}
      <Text style={{width:200,height:30,color:'white',marginTop:10,display:'flex',alignItems:'center',fontFamily:'Arial',fontWeight:'700',fontSize:17, marginLeft:16}}>Postcard</Text>
      {liked.map((item)=>{
        if(item.type === 'postcard' && item.like === true){
          return(
            <View >
              <Pressable style={{width:355,marginLeft:16,marginTop:10,height:50,flexDirection:'row',alignItems:'center'}}>
              <Image source={{uri:item.theme}} style={{width:50,height:50,borderRadius:6}}/>
              <View style={{width:226,height:50,marginLeft:12,justifyContent:'space-around'}}>
                <Text style={{width:207,height:18,color: 'white', fontSize: 15, fontFamily: 'Arial', fontWeight: '700', wordWrap: 'break-word'}}>{item.name}</Text>
                <Text style={{width:207,height:15,color: 'rgba(255, 255, 255, 0.50)', fontSize: 12, fontFamily: 'Arial', fontWeight: '700', wordWrap: 'break-word'}}>{item.singer}</Text>
              </View>
              <Pressable onPress={()=>console.log(item.id)}>
              <Feather name="x" size={24} color="red" style={{marginRight:15}}/>
              </Pressable>
              <Pressable>
              <AntDesign name="heart" size={24} color="#00FF33" />
              </Pressable>
              </Pressable>
            </View>
          )
        }
      })}
      <Text style={{width:200,height:30,color:'white',marginTop:10,display:'flex',alignItems:'center',fontFamily:'Arial',fontWeight:'700',fontSize:17, marginLeft:16}}>Show</Text>
      {liked.map((item)=>{
        if(item.type === 'show' && item.like === true){
          return(
            <View>
              <Pressable style={{width:355,marginLeft:16,marginTop:10,height:50,flexDirection:'row',alignItems:'center'}}>
              <Image source={{uri:item.theme}} style={{width:50,height:50,borderRadius:6}}/>
              <View style={{width:226,height:50,marginLeft:12,justifyContent:'space-around'}}>
              <Text style={{width:207,height:18,color: 'white', fontSize: 15, fontFamily: 'Arial', fontWeight: '700', wordWrap: 'break-word'}}>{item.name}</Text>
              <Text style={{width:207,height:15,color: 'rgba(255, 255, 255, 0.50)', fontSize: 12, fontFamily: 'Arial', fontWeight: '700', wordWrap: 'break-word'}}>{item.singer}</Text>
              </View>
              <Pressable onPress={()=>console.log(item.id)}>
              <Feather name="x" size={24} color="red" style={{marginRight:15}}/>
              </Pressable>
              <Pressable>
              <AntDesign name="heart" size={24} color="#00FF33" />
              </Pressable>
              </Pressable>
            </View>
          )
        }
      })}
    </View>
  );
}