import React, {useState} from 'react';
import { StyleSheet, Alert, Text, View, TextInput, ScrollView, TouchableOpacity,Image} from 'react-native';
import firebase from 'firebase';
import Icon from 'react-native-vector-icons/FontAwesome5';
 

export default function addProduct({navigation}) {
 
const [disable,setDisable] = useState({
    Name:false,
    Dea:false,
    Phone:false, 
    Password:false 
})
const [user,setUser] = useState({
    Name:'',
    Email:'',
    Phone:'', 
    Password:'' 
})
 
function getEmails() {
    const db = firebase.database().ref();
    const dbtable = db.child("customers");
    dbtable.get().then((snapshot) => {
     if (snapshot.exists()) {
       const array2=snapshot.val();
       const userId=Object.keys(array2);    
       const countObj=userId.length; 
       for(var i=0;i<countObj;i++){
       dbtable.child(userId[i]).child("Email").get().then((snapshot)=>{
         Email.push(snapshot.val());
       }).catch((error)=>{
         console.log(error)
       })
       }
       } 
     else {
         console.log("Data Not available");
       }
     }).catch((error) => {
       console.error(error);
     });
   
     return Email;
 } 

 
const [Email,setEmail]=useState([getEmails()])
const [hidePass, setHidePass] = useState(true); 
const [hidePassword, setHidePassword] = useState(true)
 

return(
    <View style={styles.container}>
    <ScrollView>
        <View style={styles.header}>
            <Image source={require('C:/Users/Singh.DESKTOP-VM4G1KR/Desktop/Neha/Project/cakeapp/images/cake.jpg')} style={styles.logo}></Image>

        </View> 
            <View style={{paddingBottom:25}}>
                <Text style={{textAlign:'center',fontSize:18,marginTop:10}}>Add Products</Text>
           
                <Text style={styles.error}>{(disable.Name) && 'Please fill name only with alphabets.'}</Text>
                <TextInput style={styles.field} 
                    placeholder={'  FirstName LastName'} placeholderTextColor="#202020"
                    onChangeText={(text)=>{
                        setUser({
                            ...user,
                            Name:text
                        });
                    }} 
                    onBlur={(e)=>{ 
                            const pattern = /^[a-zA-Z]{1,40}( [a-zA-Z\']{1,40})$/;
                            setDisable({
                                ...disable,
                                Name:(!pattern.test(user.Name))
                            }); 
                    }}
                />
           
                <Text style={styles.error}>{(disable.Email) && 'Invalid Email id'}</Text>
                <TextInput style={styles.field} 
                    placeholder={'  Email ID'} placeholderTextColor="#202020"
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
               
                <Text style={styles.error}>{(disable.Phone) && 'Invalid Mobile No'}</Text>                   
                <TextInput style={styles.field} 
                    placeholder={'  Mobile No.'} placeholderTextColor="#202020"
                    keyboardType={"numeric"} 
                    onChangeText={(text)=>{ 
                        setUser({
                            ...user,
                            Phone:text
                        });
                    }}
                    onBlur={(e)=>{ 
                            const pattern = /^[6-9]\d{9}$/ 
                            user.Phone.trim();
                            setDisable({ 
                                ...disable,
                                Phone:(!pattern.test(user.Phone))
                            });  
                    }}
                />
                 
                 <Text style={styles.error}>{(disable.Password) && 'Password must contain atleast one uppercase letter, one lowercase letter, one number and one special character.'}</Text>
                    <TextInput style={[styles.field,{width:"80%",borderTopRightRadius: 8, borderTopLeftRadius: 8,}]} secureTextEntry={hidePass ? true : false} placeholderTextColor="#202020" placeholder="Password"  
                         
                        onChangeText={(text) => {
                            setUser({
                                ...user,
                                Password:text
                            });
                        }} 
                        onBlur={(e)=>{ 
                                const pattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/; 
                                setDisable({
                                    ...disable,
                                    Password:(!pattern.test(user.Password))
                                }); 
                        }}
                    />
          <Icon
                style={[styles.field,{width:"13%",borderWidth:0,marginTop:15}]}
                name={hidePass ? 'eye-slash' : 'eye'} 
                borderBottomLeftRadius={0}
                borderTopLeftRadius={0}
                
            
                color="grey"
                onPress={() => setHidePass(!hidePass)}
              />  
        </View>


         

        <View>{(disable.Password) && <Text style={{fontSize:15, color:"red",paddingBottom:15}}> Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character: *</Text>}</View>
        <View style={{flexDirection:"row",}} > 
          <TouchableOpacity style={styles.button} 
            onPress={(e)=>{
               
                if(disable. Name==false && disable.Phone==false && disable.Email==false && disable.Password==false )
                {

                      if(Email.includes(user.Email) )
                          {
                            Alert.alert("Error","Your email id is already registrated. Please login",[
                              { text: "OK", onPress: () => {console.log("OK Pressed");navigation.navigate('Login') }}
                            ])
                            
                          }
                      else
                      {
                            if( user.Name=='' || user.Contact=='' || user.Email=='' || user.Password=='')
                          {
                            Alert.alert("Error","Please fill the details properly",[
                              { text: "OK", onPress: () =>{ console.log("OK Pressed");console.log(disable)}}
                            ])
                          }
                     
                      else{
                        firebase.database().ref('admins/').push(user);
                   
                        Alert.alert("Sign Up Sucessful","Please login in to your account",[
                          { text: "OK", onPress: () => {console.log("OK Pressed"); navigation.navigate('Login')}}
                        ])
                        

                    }
                  }
                }      
                else{
                  Alert.alert("Error","Please fill the details properly",[
                    { text: "OK", onPress: () =>{ console.log("OK Pressed");console.log(disable)}}
                  ])
                
                }
            }}

          >
             <Text style={{fontSize:20,fontWeight:'bold' }} >Sign Up</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}> 
                   <Text style={{fontSize:20,fontWeight:'bold' }} onPress={(e)=>navigation.navigate("Home")}>Cancel</Text> 
                   </TouchableOpacity>
                </View>
 
                <View style={{flexDirection:"row"}}>
                    <Text>Already have an account? </Text>
                   <TouchableOpacity onPress={(e)=>navigation.navigate("Login")}><Text style={{textDecorationLine:"underline",color:"red"}}>Login Here</Text></TouchableOpacity>
                </View>
                
            </ScrollView>
        </View>  
    )
}    

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent: 'center',
        backgroundColor:'white',
    },
    header: {  
      backgroundColor:"pink",
      width:"100%",
      padding:7, 
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
      marginLeft:4,
      marginRight:10,
      marginTop:10,
      borderColor:"black" ,
      height:40,
      fontSize:15,
      padding:10,
      paddingVertical:5,
      borderRadius: 25,
      marginVertical:-10, 
    },
    error: {
        fontSize:15,
        color:"red",
        marginLeft:20,
        marginBottom:10,
    },
    button: {
        backgroundColor: 'pink',
        alignItems:'center',
        width: 150,
        borderRadius:25,
        padding:5,
        marginBottom:20,
        borderColor:"black" ,
        color:"black",
        borderWidth:2 
    }
});  

 
    
   

   