import { AntDesign, Entypo, Feather, FontAwesome, Ionicons, SimpleLineIcons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Image,  Pressable,  StyleSheet, Text, TextInput, View } from 'react-native';

var data = [];
var liked = [];
var songs = [];
var url = 'https://6551c0df5c69a77903290c9a.mockapi.io/User'
var urlsong = 'https://6551c0df5c69a77903290c9a.mockapi.io/Songs'
export default function App() {
const nav = useNavigation();
const rou = useRoute();
const [songs,setSong] = useState([]);
const [data, setData] = useState([]);
const [filter, setFilter] = useState('');
const [liked, setLiked] = useState([]); // Sử dụng state mới để lưu trữ danh sách đã lọc
const id = rou?.params?.id;

const fc = () => {
  fetch(url + '/' + id)
    .then(response => response.json())
    .then(json => {
      setData(json);
      setLiked(json.LikedSong); // Cập nhật danh sách liked từ dữ liệu fetch về
    });
};
useEffect(fc,[]);

const fm = ()=>{
  fetch(urlsong)
    .then(response => response.json())
    .then(json => {
      setSong(json);
    });
};
useEffect(fm,[])

function removeVietnameseAccent(str) {
  str = str.toLowerCase();
  str = str.replace(/[áàảãạăắằẳẵặâấầẩẫậ]/g, 'a');
  str = str.replace(/[éèẻẽẹêếềểễệ]/g, 'e');
  str = str.replace(/[íìỉĩị]/g, 'i');
  str = str.replace(/[óòỏõọôốồổỗộơớờởỡợ]/g, 'o');
  str = str.replace(/[úùủũụưứừửữự]/g, 'u');
  str = str.replace(/[ýỳỷỹỵ]/g, 'y');
  str = str.replace(/đ/g, 'd');
  return str;
}

useEffect(() => {
  if (filter !== '') {
    const filteredLiked = liked.filter(item => removeVietnameseAccent(item.name).includes(removeVietnameseAccent(filter)));
    setLiked(filteredLiked); // Cập nhật danh sách liked với dữ liệu đã lọc
  } else {
    fc(); // Nếu filter rỗng, tải lại dữ liệu đầy đủ
  }
}, [filter]);

console.log(liked)
  return (
    <View style={{width:'100%',height:850,background: 'linear-gradient(180deg, rgba(131, 43, 236, 1) 50%, rgba(0, 0,0, 1) 100%)'}}>
      <View style={{marginLeft:16,width:363,height:35,flexDirection:'row',alignItems:'center',marginTop:19}}>
        <Pressable onPress={()=>nav.navigate('Home')}>
          <Ionicons name="arrow-back-sharp" size={33} color="black" />
        </Pressable>
        <View style={{width:247,height:33,alignItems:'center',marginLeft:8,backgroundColor:'#9370DB',flexDirection:'row'}}>
          <Ionicons name="search-circle-sharp" size={26} color="green" style={{marginLeft:5}}/>
          <TextInput onChangeText={(filter)=>setFilter(filter)} 
            value={filter} autoCorrect={false} placeholder='Find in Liked Song' style={{width:187,height:26,color: 'rgba(255, 255, 255, 0.60)', fontSize: 15, fontFamily: 'Arial', fontWeight: '700', wordWrap: 'break-word',alignItems:'center',marginLeft:15}}></TextInput>
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
              <Pressable onPress={()=>nav.navigate('Playmusic',{check:true,userid: data.id,id:item.id,theme:item.theme,name:item.name,singer:item.singer,like:item.like})} style={{width:355,marginLeft:16,marginTop:10,height:50,flexDirection:'row',alignItems:'center'}}>
              <Image source={{uri:item.theme}} style={{width:50,height:50,borderRadius:6}}/>
              <View style={{width:226,height:50,marginLeft:12,justifyContent:'space-around'}}>
              <Text style={{width:207,height:18,color: 'white', fontSize: 15, fontFamily: 'Arial', fontWeight: '700', wordWrap: 'break-word'}}>{item.name}</Text>
              <Text style={{width:207,height:15,color: 'rgba(255, 255, 255, 0.50)', fontSize: 12, fontFamily: 'Arial', fontWeight: '700', wordWrap: 'break-word'}}>{item.singer}</Text>
              </View>
              <Pressable onPress={()=>{
                var songid = item.id;
                var songname = item.name;
                var updatedLiked = liked.filter(song => song.id !== songid);
                //Xóa khỏi mục yêu thích
                fetch(url + '/' + id, {
                  method: 'PUT',
                  body: JSON.stringify({
                    LikedSong: updatedLiked
                  }),
                  headers: {
                    "Content-type": "application/json; charset=UTF-8"
                  },
                }).then((res) => {
                  return res.json();
                }).then((data) => {
                  console.log(data.LikedSong);
                  fc();
                  console.log(data);
                })
                //Cập nhật trong list nhạc của hệ thống là đã hết thích
                var updatedsong = songs.filter(song => song.name === songname)
                fetch(urlsong + '/' + updatedsong[0].id,{
                  method: 'PUT',
                  body: JSON.stringify({
                    like: false
                  }),
                  headers: {
                    "Content-type": "application/json; charset=UTF-8"
                  },
                  }).then((res) => {
                    return res.json();
                  }).then((data) => {
                    console.log(data);
                })
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
              <Pressable onPress={()=>nav.navigate('Playmusic',{check:true,userid: data.id,id:item.id,theme:item.theme,name:item.name,singer:item.singer,like:item.like})} style={{width:355,marginLeft:16,marginTop:10,height:50,flexDirection:'row',alignItems:'center'}}>
              <Image source={{uri:item.theme}} style={{width:50,height:50,borderRadius:6}}/>
              <View style={{width:226,height:50,marginLeft:12,justifyContent:'space-around'}}>
                <Text style={{width:207,height:18,color: 'white', fontSize: 15, fontFamily: 'Arial', fontWeight: '700', wordWrap: 'break-word'}}>{item.name}</Text>
                <Text style={{width:207,height:15,color: 'rgba(255, 255, 255, 0.50)', fontSize: 12, fontFamily: 'Arial', fontWeight: '700', wordWrap: 'break-word'}}>{item.singer}</Text>
              </View>
              <Pressable onPress={()=>{
                var songid = item.id;
                var songname = item.name;
                var updatedLiked = liked.filter(song => song.id !== songid);
                //Xóa khỏi mục yêu thích
                fetch(url + '/' + id, {
                  method: 'PUT',
                  body: JSON.stringify({
                    LikedSong: updatedLiked
                  }),
                  headers: {
                    "Content-type": "application/json; charset=UTF-8"
                  },
                }).then((res) => {
                  return res.json();
                }).then((data) => {
                  console.log(data.LikedSong);
                  fc();
                  console.log(data);
                })
                //Cập nhật trong list nhạc của hệ thống là đã hết thích
                var updatedsong = songs.filter(song => song.name === songname)
                fetch(urlsong + '/' + updatedsong[0].id,{
                  method: 'PUT',
                  body: JSON.stringify({
                    like: false
                  }),
                  headers: {
                    "Content-type": "application/json; charset=UTF-8"
                  },
                  }).then((res) => {
                    return res.json();
                  }).then((data) => {
                    console.log(data);
                })
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
      <Text style={{width:200,height:30,color:'white',marginTop:10,display:'flex',alignItems:'center',fontFamily:'Arial',fontWeight:'700',fontSize:17, marginLeft:16}}>Show</Text>
      {liked.map((item)=>{
        if(item.type === 'show' && item.like === true){
          return(
            <View>
              <Pressable onPress={()=>nav.navigate('Playmusic',{check:true,userid: data.id,id:item.id,theme:item.theme,name:item.name,singer:item.singer,like:item.like})} style={{width:355,marginLeft:16,marginTop:10,height:50,flexDirection:'row',alignItems:'center'}}>
              <Image source={{uri:item.theme}} style={{width:50,height:50,borderRadius:6}}/>
              <View style={{width:226,height:50,marginLeft:12,justifyContent:'space-around'}}>
              <Text style={{width:207,height:18,color: 'white', fontSize: 15, fontFamily: 'Arial', fontWeight: '700', wordWrap: 'break-word'}}>{item.name}</Text>
              <Text style={{width:207,height:15,color: 'rgba(255, 255, 255, 0.50)', fontSize: 12, fontFamily: 'Arial', fontWeight: '700', wordWrap: 'break-word'}}>{item.singer}</Text>
              </View>
              <Pressable onPress={()=>{
                var songid = item.id;
                var updatedLiked = liked.filter(song => song.id !== songid);
                var songname = item.name;
                fetch(url + '/' + id, {
                  method: 'PUT',
                  body: JSON.stringify({
                    LikedSong: updatedLiked
                  }),
                  headers: {
                    "Content-type": "application/json; charset=UTF-8"
                  },
                }).then((res) => {
                  return res.json();
                }).then((data) => {
                  console.log(data.LikedSong);
                  fc();
                  console.log(data);
                })
                //Cập nhật trong list nhạc của hệ thống là đã hết thích
                var updatedsong = songs.filter(song => song.name === songname)
                fetch(urlsong + '/' + updatedsong[0].id,{
                  method: 'PUT',
                  body: JSON.stringify({
                    like: false
                  }),
                  headers: {
                    "Content-type": "application/json; charset=UTF-8"
                  },
                  }).then((res) => {
                    return res.json();
                  }).then((data) => {
                    console.log(data);
                })
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
    </View>
  );
}