import { View, Text ,SafeAreaView , TouchableOpacity , TextInput,  ScrollView, StyleSheet , Image} from 'react-native'
import React from 'react'
import { Link , useRouter } from 'expo-router';

export default function Loginpage() {
    const router = useRouter();

    const navigate_otp = () =>{
        router.push('/(login)/otp')
    }

  return (
    <SafeAreaView  style={styles.main}>
        <ScrollView >
         <View style={styles.cont}>
         <Image style={styles.img} source={require('../../assets/images/img1.jpg')}></Image>
         <Text  style={styles.text1}>Welcome To <Text  style={styles.text1a}>UpLearn</Text></Text>
         <Text  style={styles.text2}>One Stop Learning Platform !</Text>
         <Text  style={styles.text3}>Login to continue</Text>
         <View style={styles.inp_box}>
            <View style={styles.box}>
                <Text>🇮🇳+91</Text>
            </View>
         <TextInput   placeholder='&nbsp;&nbsp;Phone Number' keyboardType="numeric" style={styles.inp}></TextInput>
         </View>
       
         <TouchableOpacity onPress={navigate_otp} style={styles.btn}><Text style={styles.btntxt}>Continue</Text></TouchableOpacity>
        
      
        </View>   
        </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

cont:{
display: "flex",
alignItems: "center",
justifyContent: "center",
height: "100%",
backgroundColor: "white"


},

main:{
    backgroundColor: "white",
    height: "100%",

},
img:{
height: 340,
width:340,

},

inp:{
height: 40,
width: 260,
borderColor: "gray",
borderWidth: 1,
borderRadius: 5,
},

inp_box:{
    display: "flex",
alignItems: "center",
justifyContent: "space-evenly",
height: 40,
width: 340,
flexDirection: "row",
marginTop: 30


},

box: {
    height: 40,
width: 60,
borderColor: "gray",
borderWidth: 1,
display: "flex",
alignItems: "center",
justifyContent: "center",
borderRadius: 5,

},


btn: {
height: 40,
width: 330,
backgroundColor: "black",
borderRadius: 5,
display: "flex",
alignItems: "center",
justifyContent: "center",
marginTop: 20


},
btntxt: {
    color: "white",
    fontSize: 16
},

text1:{
fontSize: 23,
fontWeight: "600",
marginTop: 30

},

text1a:{
color: "#FFCD38"
},

text2:{
    marginTop: 10,
    color: "gray"

},

text3:{
    fontSize: 20,
    fontWeight: "400",
    marginTop: 130
}




})