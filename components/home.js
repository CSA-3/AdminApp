import React from 'react';
import {StyleSheet, View,Text,Button, TouchableOpacity} from 'react-native';



export default function Home({navigation}) {

    const pressHandler =() => {
        navigation.navigate("Registration"); 
    }
    const pressHandler2 =() => {
        navigation.navigate("Login"); 
    }
  
    return(
        <View>   
            <Text style={{fontSize:40,fontWeight:'bold',color:'#0B0DE0',marginLeft:70 }} onPress={pressHandler}>WELCOME TO</Text> 
            <Text style={{fontSize:40,fontWeight:'bold',color:'orange',marginLeft:110 }} onPress={pressHandler}> CAKE </Text> 
            <Text style={{fontSize:40,fontWeight:'bold',color:'#F613F3',marginLeft:120 }} onPress={pressHandler}> POP </Text> 
            <Text style={{fontSize:40,fontWeight:'bold',color:'lightgreen',marginLeft:110 }} onPress={pressHandler}> RUSH </Text> 
            <TouchableOpacity style={styles.button}> 
                   <Text style={{fontSize:20,fontWeight:'bold',color:'white'}} onPress={pressHandler}> Sign Up </Text> 
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} > 
                   <Text style={{fontSize:20,fontWeight:'bold',color:'white'}} onPress={pressHandler2}> Login  </Text> 
            </TouchableOpacity> 
        </View>
    )
 
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: 'pink',
        alignItems:'center',
        width: 150,
        borderRadius:15,
        padding:5 ,
        marginBottom:20,
        marginTop:20,
        marginLeft:100,
        borderColor:"black" ,
        color:"white",
        borderWidth:2 
    }
    

});
