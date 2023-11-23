import { AntDesign, Entypo, Ionicons, SimpleLineIcons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import {Image, Pressable, Text, View} from 'react-native';

const HelloWorldApp = () => {
    var nav = useNavigation();
    var rou = useRoute();
    var [check,setCheck] = useState(rou?.params?.check);
    var userid = rou?.params?.userid
    var id = rou?.params?.id
    var name = rou?.params?.name
    var theme = rou?.params?.theme
    var like = rou?.params?.like
    var singer = rou?.params?.singer
  return (
    <View style={{width:'100%',height:700,alignItems:'center',background: 'linear-gradient(180deg, #5DB07A 0%, rgba(180.73, 182.54, 92.33, 0.50) 100%)'}}>
        <View style={{width:350,height:40,marginTop:20,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
            <Pressable onPress={()=>nav.navigate('Home')}>
            <AntDesign name="down" size={30} color="white" />
            </Pressable>
            <Text style={{width:270,height:40,display:'flex',justifyContent:'center',alignItems:'center', color: 'white', fontSize: 25, fontFamily: 'Arial', fontWeight: '700', wordWrap: 'break-word'}}>
                {name}</Text>
            <Entypo name="dots-three-vertical" size={30} color="black" />
        </View>
        <Image source={{uri:theme}} style={{marginBottom:11,width:330,height:330,marginTop:40}}/>
        <View style={{height:50,width:330,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
            <View style={{width:260,height:50,alignContent:'space-between'}}>
                <Text style={{color: 'white', fontSize: 20, fontFamily: 'Arial', fontWeight: '700', wordWrap: 'break-word'}}>{name}</Text>
                <Text style={{color: 'rgba(255, 255, 255, 0.50)', marginTop:7,fontSize: 15, fontFamily: 'Arial', fontWeight: '700', wordWrap: 'break-word'}}>{singer}</Text>
            </View>
            <Pressable>
                <AntDesign name="heart" size={40} color={like ? '#00FF33' : 'white'}/>
            </Pressable>
        </View>
        <View style={{marginTop:25,width:330,height:40}}>
            <Text style={{marginBottom:10,width:330,height:3,backgroundColor:'white'}}></Text>
            <View style={{width:330,height:20,flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={{textAlign: 'center', color: 'white', fontSize: 15, fontFamily: 'Arial', fontWeight: '400', wordWrap: 'break-word'}}>0:00</Text>
                <Text style={{textAlign: 'center', color: 'white', fontSize: 15, fontFamily: 'Arial', fontWeight: '400', wordWrap: 'break-word'}}>2:57</Text>
            </View>
        </View>
        <View style={{width:330,height:60,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            <Pressable>
                <Ionicons name="download-outline" size={30} color="white" style={{borderRadius:50,width:50,height:50,backgroundColor:'green',justifyContent:'center',display:'flex',alignItems:'center'}}/>
            </Pressable>
            <Pressable>
            <Entypo name="controller-jump-to-start" size={30} color="white" style={{borderRadius:50,width:50,height:50,backgroundColor:'green',display:'flex',justifyContent:'center',alignItems:'center'}}/>
            </Pressable>
            <Pressable onPress={()=>{
                if(check){
                    setCheck(false)
                    console.log('Dừng')
                }else{
                    setCheck(true)
                    console.log('Chạy')
                }
            }}>
                <AntDesign name={check ? "pausecircle" : "play"} size={60} color="green" />
            </Pressable>
            <Pressable>
                <Entypo name="controller-next" size={30} color="white" style={{borderRadius:50,width:50,height:50,backgroundColor:'green',display:'flex',justifyContent:'center',alignItems:'center'}}/>
            </Pressable>
            <Pressable>
                <SimpleLineIcons name="loop" size={30} color="white" style={{borderRadius:50,width:50,height:50,backgroundColor:'green',display:'flex',justifyContent:'center',alignItems:'center'}}/>
            </Pressable>
        </View>
    </View>
  );
};
export default HelloWorldApp;