import React, {useState} from 'react'
import firebase from 'firebase';
import {StyleSheet, TouchableOpacity, View,Text,Image, TextInput,ScrollView, Alert} from 'react-native'


function Login({navigation}) {
  function getCredentials() {
        const dbRef = firebase.database().ref();
        const dbtable=dbRef.child("customers"); 
        dbtable.get().then((snapshot) => {
        if (snapshot.exists()) {
          const array2=snapshot.val();
          const userId=Object.keys(array2);
          const countObj=Object.keys(array2).length;
          var email,password;
          console.log(userId);
          for(var i=0;i<countObj;i++){
          dbtable.child(userId[i]).child("Email").get().then((snapshot)=>{
            email=snapshot.val()
        //    console.log(email)
            }).catch((error)=>{
            console.log(error);
          });
          dbtable.child(userId[i]).child("Password").get().then((snapshot)=>{
            password=snapshot.val()
            // console.log(password)
            dbObj.push({email,password})
            // console.log(dbObj)
            }).catch((error)=>{
            console.log(error);
          });
          
          }
        } else {
          console.log("No data available");
        }
      }).catch((error) => {
        console.error(error);
      });
    
      return dbObj ;
      }
    

    const [userinput,setUserinput] = useState({
        username:'',
        password:''
    })
     
    const [dbObj,setdbObj] = useState([(getCredentials())])
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('C:/Users/Singh.DESKTOP-VM4G1KR/Desktop/Neha/Project/cakeapp/images/cake.jpg')} style={styles.logo}></Image>
               
            </View> 
            <ScrollView>
                <View >
                    <Text style={{textAlign:'center',fontSize:18,marginBottom: 20}}>Please Login</Text>
                    <TextInput style={styles.field} placeholderTextColor="#202020" placeholder="Email"  
                        onChangeText={(text)=>{ 
                            setUserinput({
                            ...userinput,
                            username:text});
                        }}
                    /> 
                    <TextInput style={[styles.field,{marginTop:20}]} placeholderTextColor="#202020" placeholder="Password"  
                        onChangeText={(text)=>{ 
                            setUserinput({
                            ...userinput,
                            password:text});
                        }}
                    />
                    <TouchableOpacity><Text style={{textDecorationLine:"underline",marginTop:20,marginLeft:65,}} onPress={(e)=>navigation.navigate("ForgotPassword")} >Forgot Password?</Text></TouchableOpacity>
                    <TouchableOpacity  
                     onPress={(e)=>{
                        
                        if(userinput.username=='' || userinput.password=='')
                        {
                            Alert.alert("Error","Please dont leave the boxes empty",[
                                { text: "OK", onPress: () =>{ console.log("OK Pressed")}}
                              ])
                        }
                        else{
                            const count=dbObj.length;
                            var foundemail,foundpass;
                            for(var i=1;i<count;i++){
                                if(dbObj[i].email==userinput.username){
                                    foundemail=1
                                    if(dbObj[i].password==userinput.password){
                                        // Alert.alert("Success","Sign up Succesfull",[
                                        //     { text: "OK", onPress: () =>{ console.log("OK Pressed");navigation.navigate('Dashboard')}}
                                        //   ])
                                          foundpass=1
                                          break;
                                    }
                                }
                            }
                            if(foundemail==1){
                                if(foundpass==1){
                                    Alert.alert("Success","Login Succesful",[
                                            { text: "OK", onPress: () =>{ console.log("OK Pressed");navigation.navigate('Home')}}
                                          ])
                                }
                                else{
                                    Alert.alert("Error","Wrong Password",[
                                        { text: "OK", onPress: () =>{ console.log("OK Pressed")}}
                                      ])
                                }
                            }
                            else{
                                Alert.alert("Error","Wrong Credentials",[
                                    { text: "OK", onPress: () =>{ onPress= (e)=>navigation.navigate("addProduct")  }} 
                                  ])
                            }
                            
                           
                        } 
                    }}><Text style={styles.button}>Login</Text></TouchableOpacity>
                    <Text>{'\n'}</Text>
                    <View style={{flexDirection:"row"}}>
                        <Text>Don't have an account? </Text>
                        <TouchableOpacity onPress={(e)=>navigation.navigate("Registration")}><Text style={{textDecorationLine:"underline",color:"red"}}>Register Here</Text></TouchableOpacity>
                    </View>
            </View>
            </ScrollView>
            </View>
    
    )
}

    
export default Login;

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
        marginLeft:50,
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
 