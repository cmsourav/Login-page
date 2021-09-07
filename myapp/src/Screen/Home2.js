import React from 'react';
import { 
     ScrollView, 
     View,
     Text,
     ImageBackground,
     StyleSheet,
     Dimensions,
     TouchableOpacity,
     Image,
} from 'react-native';


const Homes = () => {
    return (
        <ScrollView 
          showsVerticalScrollIndicator= {false}>
               
            <ImageBackground source={
                require('../Assets/bg1.jpg') }
                  style={styles.backgroundImage}  resizeMode='stretch' >

               <View style={{alignItems:'center',justifyContent:'center',marginTop:20}}>
               <Text style={styles.bottomViewText}> Welcome </Text>
                 <Text style={styles.bottomViewSubText}> Explore the new experince with Kalyani Motors</Text> 

                 <View style={{width:'80%',display:'flex'}}>
                 <TouchableOpacity style={styles.loginBtn}>
                 <Image source={{
                         uri:'https://image.flaticon.com/icons/png/512/2875/2875404.png' }}
                         style={{width:25,height:25,marginRight:15}}
                         />
                   <Text style={styles.loginText}>Continue With Google</Text>
                     </TouchableOpacity>
                     </View>

                   <View style={{width:'80%',display:'flex',}}>
                     <TouchableOpacity style={styles.loginBtn}>
                 <Image source={
                     require('../Assets/fblogo.png')
                 }
                         style={{width:25,height:25,marginRight:15}}
                         />
                   <Text style={styles.loginText}>Continue With Facebook</Text>
                     </TouchableOpacity>
                </View>
                </View>
            </ImageBackground>
            
    </ScrollView>
    
    )
}

const styles = StyleSheet.create({
    backgroundImage: {
        height:Dimensions.get('window').height,
    },
    brandView: {
        padding:40,
    },
    loginBtn: {
        
        width: "80%",
        borderRadius: 25,
        height:50,
        alignItems: "center",
        justifyContent: "center",
        alignSelf:'center',
        marginTop: 30,
        borderWidth:0.5,
        borderColor:'black',
        flexDirection:'row',
        // backgroundColor:'#80bfff'

    },
    loginText: {
        fontSize: 17,
        color:'white',
        // fontWeight: '700',

        
    },
    bottomViewText: {
        color: '#4632A1',
        fontSize: 35,
        fontWeight: 'bold',
        marginBottom:10,
    },
    bottomViewSubText: {
        fontSize:17,
        fontWeight: '700',
        color:'#484848',
    }

})

export default Homes;