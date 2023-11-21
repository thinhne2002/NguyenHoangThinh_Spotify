import { AntDesign, Entypo, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { FlatList, Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

var data = []
var music = []
var postcard = []
var show = []
var url = 'https://6551c0df5c69a77903290c9a.mockapi.io/Songs'
var urluser = 'https://6551c0df5c69a77903290c9a.mockapi.io/User'
export default function App() {
  var rou = useRoute();
  var nav = useNavigation();
  var [data,setData] = useState();
  var [user,setUser] = useState([]);
  var id = rou?.params?.id
  var fn = ()=>{
    fetch(urluser + '/' + id)
      .then(response => response.json())
      .then(json => {
        user = json,
        setUser(user)
        console.log(user)
        });
  }
  var fc = ()=> {
    fetch(url)
      .then(response => response.json())
      .then(json => {
        data = json,
        setData(data)
        data.forEach(item => {
          if (item.type === 'music') {
            music.push(item);
          } else if (item.type === 'poscard') {
            postcard.push(item);
          } else if (item.type === 'show') {
            show.push(item);
          }
        });
      });
  }
  useEffect(fc,[])
  useEffect(fn,[])
  console.log(data)
  console.log(music);
  console.log(postcard);
  console.log(show);
  return (
    <View style={{width:390,height:770,backgroundColor:'#000000',alignItems:'center'}}>
      <View style={{width:390,height:70,alignItems:'center',flexDirection:'row'}}>
        <Image source={{uri:user.avatar}} style={{marginLeft:15,width:50,height:50,resizeMode:'contain',borderRadius:100}}/>
        <Text style={{marginLeft:15,width:221,height:50,paddingTop:15,color: 'white', fontSize: 20, fontFamily: 'Arial', fontWeight: '700', wordWrap: 'break-word'}}>
          HI {user.name}</Text>
        <Pressable onPress={()=>nav.navigate('LikedSong',{likedsong: user.likedsong,id: user.id,name: user.name})}>
          <MaterialIcons name="library-music" size={40} color="white" style={{marginLeft:30}} />
        </Pressable>
      </View>
      <View style={{marginTop:5,width:390,height:40,flexDirection:'row'}}>
        <Pressable style={{marginLeft:15,background: '#333333', borderRadius: 20,width:90,height:38,alignItems:'center'}}>
          <Text style={{textAlign: 'center',paddingTop:11, color: 'white', fontSize: 11, fontFamily: 'Arial', fontWeight: '600', wordWrap: 'break-word'}}>
            Music</Text>
        </Pressable>
        <Pressable style={{marginLeft:15,background: '#333333', borderRadius: 20,width:90,height:38,alignItems:'center'}}>
          <Text style={{textAlign: 'center',paddingTop:11, color: 'white', fontSize: 11, fontFamily: 'Arial', fontWeight: '600', wordWrap: 'break-word'}}>
            Postcard</Text>
        </Pressable>
        <Pressable style={{marginLeft:15,background: '#333333', borderRadius: 20,width:90,height:38,alignItems:'center'}}>
          <Text style={{textAlign: 'center',paddingTop:11, color: 'white', fontSize: 11, fontFamily: 'Arial', fontWeight: '600', wordWrap: 'break-word'}}>
            Show</Text>
        </Pressable>
      </View>
      <Text style={{paddingTop:3,marginTop:5,marginBottom:5,width:363,height:22,color: 'white', fontSize: 15, fontFamily: 'Arial', fontWeight: '700', wordWrap: 'break-word'}}>
        Music
      </Text>
      <View style={{width:363,height:170,alignItems:'center'}}>
        <FlatList
          numColumns={2}
          data={music.slice(3, 9)} 
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Pressable onPress={()=>{console.log(item.name)}} style={{ width: 170, height: 50,backgroundColor:'#333333',marginRight:11,marginLeft:11,marginBottom:6,flexDirection:'row',borderRadius:6}}>
              <Image source={{uri:item.theme}} style={{width:50,height:50,borderRadius:6}}/>
              <View style={{marginLeft:10,width:100,height:50,justifyContent:'center'}}>
                <Text style={{color: 'white', fontSize: 10, fontFamily: 'Arial', fontWeight: '700', wordWrap: 'break-word'}}>
                  {item.name}
                </Text>
              </View>
            </Pressable>
          )}
        />
      </View>
      <Text style={{paddingTop:3,marginTop:5,marginBottom:5,width:363,height:22,color: 'white', fontSize: 15, fontFamily: 'Arial', fontWeight: '700', wordWrap: 'break-word'}}>
          Poscard
      </Text>
      <View style={{width:368,height:155}}>
          <FlatList
            numColumns={3}
            data={postcard} 
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <Pressable onPress={()=>{console.log(item.name)}} style={{marginRight:15}}>
              <Image source={{uri:item.theme}} style={{width:130,height:130,borderRadius:6}}/>
              <Text style={{marginTop:7,width:130,height:15,color: 'white', fontSize: 12, fontFamily: 'Arial', fontWeight: '700', wordWrap: 'break-word'}}>
                {item.name}
              </Text>
              </Pressable>
            )}
          />    
      </View>
      <Text style={{paddingTop:3,marginTop:5,marginBottom:5,width:363,height:22,color: 'white', fontSize: 15, fontFamily: 'Arial', fontWeight: '700', wordWrap: 'break-word'}}>
          TV & Show
      </Text>
      <View style={{width:368,height:155}}>
          <FlatList
            numColumns={3}
            data={show} 
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <Pressable onPress={()=>{console.log(item.name)}} style={{marginRight:15}}>
              <Image source={{uri:item.theme}} style={{width:130,height:130,borderRadius:6}}/>
              <Text style={{marginTop:7,width:130,height:15,color: 'white', fontSize: 12, fontFamily: 'Arial', fontWeight: '700', wordWrap: 'break-word'}}>
                {item.name}
              </Text>
              </Pressable>
            )}
          />    
      </View>
      <View style={{width:390,height:55,flexDirection:'row',alignItems:'center',justifyContent:'space-around',marginTop:20}}>
        <Pressable>
          <Entypo name="home" size={40} color="white" />
        </Pressable>
        <Pressable onPress={()=>nav.navigate('Search')}>
          <AntDesign name="search1" size={40} color="white" />
        </Pressable>
        <Pressable>
          <Image source={{uri:user.avatar}} style={{width:40,height:40,borderRadius:100}} />
        </Pressable> 
      </View>
    </View>
  );
}