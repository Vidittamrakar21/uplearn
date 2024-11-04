import { View, Text ,SafeAreaView , TouchableOpacity , TextInput,  ScrollView, StyleSheet , Image} from 'react-native'
import React, { useEffect , useState } from 'react'
import { useRouter } from 'expo-router';



export default function Otppage() {
  const [countdown, setCountdown] = useState(20);

  const router = useRouter();

  const navigate_home = () =>{
      router.push('/(tabs)/')
  }

  useEffect(() => {
    if (countdown > 0) {
      const timer = setInterval(() => {
        setCountdown(prevCount => prevCount - 1);
      }, 1000);

      // Clear interval on component unmount
      return () => clearInterval(timer);
    }
  }, [countdown]);

  

  return (
    <SafeAreaView  style={styles.main}>
        <ScrollView >
         <View style={styles.cont}>
         <Image style={styles.img} source={require('../../assets/images/img2.jpg')}></Image>
         <Text  style={styles.text3}>Enter OTP , Sent to +91935....49</Text>
         <View style={styles.inp_box}>
            
         <TextInput  keyboardType="numeric" style={styles.inp}></TextInput>
         <TextInput  keyboardType="numeric" style={styles.inp}></TextInput>
         <TextInput  keyboardType="numeric" style={styles.inp}></TextInput>
         <TextInput  keyboardType="numeric" style={styles.inp}></TextInput>
         </View>
         <Text style={styles.text2}>Didn't Received Yet? Resend after {countdown} sec</Text>
         <TouchableOpacity onPress={navigate_home} style={styles.btn}><Text style={styles.btntxt}>Continue</Text></TouchableOpacity>
      
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
height: 50,
width: 50,
borderColor: "gray",
borderWidth: 1,
borderRadius: 5,
fontSize: 20
},

inp_box:{
    display: "flex",
alignItems: "center",
justifyContent: "space-evenly",
height: 40,
width: 240,
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
marginTop: 200


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
    fontWeight: "500",
    marginTop: 30
}




})