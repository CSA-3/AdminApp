import React, {useState} from 'react'
import firebase from 'firebase';
import {StyleSheet, TouchableOpacity, View,Text,Image, TextInput,ScrollView, Alert} from 'react-native'


function ForgotPassword({navigation}) {
 
  const [disable,setDisable] = useState({ 
    Email:false, 
  })
  const [user,setUser] = useState({ 
    Email:'' 
  })
 
 
  
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('C:/Users/Singh.DESKTOP-VM4G1KR/Desktop/Neha/Project/cakeapp/images/cake.jpg')} style={styles.logo}></Image>
               
            </View> 
            <ScrollView>
                <View style={styles.login}>
                    <Text style={{textAlign:'center',fontSize:18,marginBottom: 20}}>Forgot Password?</Text>
                    <Text style={styles.error}>{(disable.Email) && 'Invalid Email id'}</Text>
                    <TextInput style={styles.field} 
                        placeholder={'  Enter your Email ID'} placeholderTextColor="#202020"
                        onChangeText={(text) => {
                            setUser({
                                ...user,
                                Email:text
                            });
                        }} 
                        onBlur={(e)=>{ 
                                const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
                                setDisable({
                                    ...disable,
                                    Email:(!pattern.test(user.Email))
                                }); 
                        }}
                    />
                    <TouchableOpacity  
                     onPress={(e)=>{
                        
                        if(userinput.Email=='' )
                        {
                            Alert.alert("Error","Please dont leave the email box empty",[
                                { text: "OK", onPress: () =>{ console.log("OK Pressed")}}
                              ])
                        }
                        else{
                          
                        } 
                    }}> 
                    <Text style={styles.button}>Send Email</Text>
                    </TouchableOpacity>
                     
                     
            </View>
            </ScrollView>
            </View>
    
    )
}

    
export default ForgotPassword;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent: 'center',
        backgroundColor:'white',
    },
    header: {  
        height:250,
        alignItems:"center",
        justifyContent:"center", 
        paddingTop:20,
        backgroundColor:"white", 
    },    
    logo:{
        height:70,
        width:550,
        borderRadius:30, 
        resizeMode: 'contain',
    },
    field: {
        borderWidth:2,
        flexDirection:"row" ,
        marginLeft:4,
        marginRight:10,
        marginTop:20,
        borderColor:"black" ,
        height:40,
        fontSize:15,
        padding:10,
        paddingVertical:5,
        borderRadius: 25, 
        width: "95%", 
    },
    error: {
        fontSize:15,
        color:"red",
        marginLeft:20,
        marginBottom:10,
    },
    button: {
        marginTop:15,
        marginLeft:45,
        backgroundColor: 'pink', 
        width: "60%", 
        borderRadius:30, 
        fontSize:20,  
        borderColor:"black" ,
        color:"black",
        borderWidth:2,    
        height:32,
        textAlign:"center", 
    }
});  
 