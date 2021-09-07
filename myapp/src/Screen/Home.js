import React, { useState } from 'react';
import { 
    Dimensions,
    ImageBackground, 
    ScrollView,
    StyleSheet,
    View ,
    Text,
    TextInput,
    TouchableOpacity,
    } from 'react-native';
    import { MaterialCommunityIcons,AntDesign } from '@expo/vector-icons';

const Home = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    return (
        <ScrollView style={{ flex: 1,backgroundColor:'#ffffff'}} 
          showsVerticalScrollIndicator= {false}>
              <ImageBackground source={{
                  uri: 'https://images.unsplash.com/photo-1528035015334-80868324e60e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YnJvd24lMjB3b29kfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' }}
                  style={styles.backgroundImage} resizeMode='cover'>
                  </ImageBackground>

           <View style={styles.bottomView}>
               <View style={{padding:40}}>
                   <Text style={styles.bottomViewText}> Welcome </Text>
                <View style={{flexDirection:'row',}}>
                    <Text style={{marginLeft:10, fontSize: 15}}>
                          Don't have an account? </Text>
                    <Text style={styles.bottomViewSubText}>
                         Register Now
                    </Text>
                </View>

             {/* Form Input View */}

            <View style={{marginTop: 50}}>
                <View  flexDirection='row'>
                    <AntDesign name="user" size={30} color="black" style={{marginRight: 15, marginBottom: 3}} />
                    <TextInput 
                        placeholder= 'Enter your email'
                        keyboardType= 'email-address'
                        onChangeText= {(email) => setEmail(email)} />
                </View>
                 <View style={{backgroundColor:'black',width:'100%',height:2}}></View>

            <View  flexDirection='row' style={{marginTop:40}}>
                <MaterialCommunityIcons name="onepassword" size={24} color="black" style={{marginRight: 18}}/>
                <TextInput 
                    placeholder= 'Password'
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                    />
            </View>
            <View style={{backgroundColor:'black',width:'100%',height:2}}></View>

            </View>
         </View>

        <View style={styles.bottom_button}>
            <TouchableOpacity>
                <Text style={styles.forgot_button}>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginBtn}>
                    <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
        </View>  

     </View>
 </ScrollView>
    )
}

                 

const styles = StyleSheet.create({
    backgroundImage: {
        height: Dimensions.get('window').height / 2.5,
    },
    bandView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    brandViewText: {
        color: 'black',
        fontSize: 40,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    bottomView: {
        flex: 1.5,
        backgroundColor: 'white',
        bottom: 50,
        borderTopStartRadius: 60,
        borderTopEndRadius: 60,
    },
    bottomViewText: {
        color: '#4632A1',
        fontSize: 35,
        fontWeight: 'bold',
    },
    bottomViewSubText:{
        color: 'red',
        paddingLeft:5, 
        fontStyle:'italic', 
    },
    forgot_button: {
        height: 30,
        marginBottom: 30,
      },
    bottom_button: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    loginBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor:'red'
    },
    loginText: {
        fontWeight:'600'
    },  
})

export  default Home;