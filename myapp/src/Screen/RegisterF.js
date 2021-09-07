import React, { useState } from 'react';
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    TextInput,

} from 'react-native';


const RegisterF = () => {

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCpassword] = useState('');

    return(
    
        <View style={styles.container}>
            <View  style={{backgroundColor: '#b3c6ff', height:300,width: 300,borderRadius:20,}}>
                <TextInput 
                    placeholder= 'Enter your name'
                    onChangeText= {(name) => setName(email)}
                />
              <View style={{backgroundColor:'black',width:'100%',height:2}}></View>

              <TextInput 
                    placeholder= 'Phone'
                    onChangeText= {(number) => setNumber(number)}
                />
              <View style={{backgroundColor:'black',width:'100%',height:2}}></View>

              <TextInput 
                    placeholder= 'Email'
                    onChangeText= {(email) => setEmail(email)}
                />
              <View style={{backgroundColor:'black',width:'100%',height:2}}></View>

              <TextInput 
                    placeholder= 'Password'
                    secureTextEntry={true}
                    onChangeText= {(password) => setPassword(password)}
                />
              <View style={{backgroundColor:'black',width:'100%',height:2}}></View>

              <TextInput 
                    placeholder= 'Conform Password'
                    secureTextEntry={true}
                    onChangeText= {(cpassword) => setCpassword(cpassword)}
                />
              <View style={{backgroundColor:'black',width:'100%',height:2}}></View>
            </View>
        </View>
    
       )
}

const styles = StyleSheet.create({
    container: {
         flex: 1,
        backgroundColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default RegisterF;