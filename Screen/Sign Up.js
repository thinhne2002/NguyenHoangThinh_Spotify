import { AntDesign, Entypo, Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

var data = [];
var urluser = 'https://6551c0df5c69a77903290c9a.mockapi.io/User'
export default function App() {
    var nav = useNavigation();
    var [data,setData] = useState([]);
    var [user,setUser] = useState('');
    var [password,setPassword] = useState('');
    var [confirm,setConfirm] = useState('');
    var rou = useRoute();
    var fc = ()=> {
        fetch(urluser)
          .then(response => response.json())
          .then(json => {
            data = json,
            setData(data)
            console.log(data)
          });
      }
    useEffect(fc,[])
    return (
    <View style={{flex:1,width:390,height:844,backgroundColor:'#000000',alignItems:'center'}}>
        <Entypo name="spotify" size={80} color="white" style={{marginTop:70,marginBottom: 20}}/>
        <Text style={{width:390,height:78,textAlign: 'center', color: 'white', fontSize: 35, fontFamily: 'Arial', fontWeight: '700', wordWrap: 'break-word'}}>
            Sing Up</Text>
        <View style={{alignItems:'center',flexDirection:'row',marginBottom:10,width:280,height:50,borderRadius: 20, border: '1px white solid'}}>
            <AntDesign name="user" size={31} color="white" style={{marginLeft:17}}/>
            <TextInput onChangeText={(user) => setUser(user)} 
            value={user} placeholder='Username' style={{marginLeft:16,fontSize:15,color:'white',width:187,height:24}}/>
        </View>
        <View style={{alignItems:'center',flexDirection:'row',width:280,marginBottom:10,height:50,borderRadius: 20, border: '1px white solid'}}>
            <AntDesign name="lock" size={31} color="white" style={{marginLeft:17}}/>
            <TextInput onChangeText={(password) => setPassword(password)} 
            value={password} /*secureTextEntry={true}*/
            placeholder='Password' style={{marginLeft:16,fontSize:15,color:'white',width:187,height:24}}/>
        </View>
        <View style={{alignItems:'center',flexDirection:'row',width:280,height:50,borderRadius: 20, border: '1px white solid'}}>
            <AntDesign name="lock" size={31} color="white" style={{marginLeft:17}}/>
            <TextInput onChangeText={(confirm) => setConfirm(confirm)} 
            value={confirm} /*secureTextEntry={true}*/
            placeholder='Confirm Password' style={{marginLeft:16,fontSize:15,color:'white',width:187,height:24}}/>
        </View>
        <View style={{flexDirection:'row',marginTop:5,width:280,height:45,alignItems:'center',justifyContent:'space-around'}}>
        <Pressable onPress={()=>nav.navigate('Login')}  
        style={{alignItems:'center',justifyContent:'center',width:112,height:40,background: '#1DB954', borderRadius: 20}}>
            <Text style={{width:136,height:20,paddingTop:3,textAlign: 'center', color: 'black', fontSize: 12, fontFamily: 'Arial', fontWeight: '700', wordWrap: 'break-word'}}>
                Login</Text>
        </Pressable>
        <Pressable onPress={()=>{
            let check = true;
            if(user !== '' && password !== '' && confirm !== ''){
                if(password !== confirm){
                   console.log('Mật Khẩu Xác Thực Bị sai, vui lòng nhập lại');
                }else{
                    data.forEach((item)=>{
                        if(user === item.username){
                            check = false;
                        }
                    })
                    if(check){
                        fetch(urluser, {
                            method: 'POST',
                            body: JSON.stringify({
                              username: user,
                              password: password,
                              avatar: 'https://picsum.photos/200/300',
                              LikedSong: [],
                              name: user, // Đây có lẽ là tên người dùng, cần kiểm tra xem nó là gì
                              type: 'Spotify'
                            }),
                            headers: {
                              'Accept': 'application/json',
                              'Content-type': 'application/json; charset=UTF-8',
                            },
                        }).then((res) => {
                            var a = res.json();
                            console.log(res.bodyUsed);
                            return a
                        }).then((data)=>{
                            console.log(data)
                        })
                        console.log('Đăng Kí Tài Khoản Thành Công')
                        setUser('')
                        setPassword('')
                        setConfirm('')
                    }else{
                        console.log('Tài Khoản bị Trùng mời Nhập Lại');
                    }
                }
            }else{
                console.log('Vui Lòng Nhập Đủ Trường');
            }
        }} style={{alignItems:'center',justifyContent:'center',width:112,height:40,background: 'white', borderRadius: 20}}>
            <Text style={{width:136,height:20,paddingTop:3,textAlign: 'center', color: 'black', fontSize: 12, fontFamily: 'Arial', fontWeight: '700', wordWrap: 'break-word'}}>
                Sign Up</Text>
        </Pressable>
        </View>
        <Pressable style={{alignItems:'center',marginTop:10,width: 280, height: 50, background: 'black', borderRadius: 20, border: '1px white solid',flexDirection:'row'}}>
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