import { View, Text ,ScrollView , Image , StyleSheet , TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react';

import { useRouter } from 'expo-router';


export default function Courses() {

  const router = useRouter();

  const navigate_explore = ()=>{
    router.push('/videoplayer')
  }

  return (
    <SafeAreaView style={styles.home}>
      <Text style={styles.txt}>My Courses</Text>
      <ScrollView   style={styles.main}>



            
            <TouchableOpacity onPress={navigate_explore} style={styles.btn}>
            <View style={styles.card}>
            <Image style={styles.img} resizeMode="stretch" source={require('../../assets/images/img4.jpg')}></Image>
            <View style={styles.bxa}>
            <Text style={styles.bld}>AI-ML Advance</Text>
            <Text style={styles.nrm}>⭐⭐⭐⭐⭐ (62,258 Ratings)</Text>
            <Text style={styles.nrm}>9,28,633 Students Enrolled </Text>
            <Text style={styles.nrm}>64.1 Hours</Text>
            <Text style={styles.nrm}>By Hadelin de Ponteves</Text>
            {/* <Text style={styles.bld}>&#8377; 1399</Text> */}
            </View>
            </View>

            </TouchableOpacity>


            
            <TouchableOpacity style={styles.btn}>
            <View style={styles.card}>
            <Image style={styles.img} resizeMode="stretch" source={require('../../assets/images/img7.jpeg')}></Image>
            <View style={styles.bxa}>
            <Text style={styles.bld}>MERN Stack</Text>
            <Text style={styles.nrm}>⭐⭐⭐⭐⭐ (1,21,610 Ratings)</Text>
            <Text style={styles.nrm}>19,88,690 Students Enrolled </Text>
            <Text style={styles.nrm}>80.5 Hours</Text>
            <Text style={styles.nrm}>By Hadelin de Ponteves</Text>
            {/* <Text style={styles.bld}>&#8377; 699</Text> */}
            </View>
            </View>
            </TouchableOpacity>





      </ScrollView>
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  home: {
    backgroundColor: "#F5F7F8",
    width: "100%",
    height: "100%",
    padding: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  main: {
    backgroundColor: "#F5F7F8",
    width: "100%",
    height: "100%",
    // padding: 20,
    display: "flex",
    // justifyContent: "center",
    // alignItems: "center"
  },

    img:{
        height: 90,
        width: 90,
        borderRadius: 20,
        // borderTopLeftRadius: 20,
        // borderTopRightRadius: 20
        marginLeft: 10
    },
    box: {
        // height: 160,
        width: "100%",
        display: "flex",
        // alignItems: "center",
        marginTop: 10
       
    },

    bxa:{
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "center",
      // height: 330,
      width: "50%",
      height: 110,
      padding: 10,
      // borderWidth: 2,
      // borderColor: "black",
      marginLeft: 10

    },
    txt: {
        fontSize: 19,
        fontWeight: "700",
        // marginLeft: 10
        marginTop: 30
    },
    cont: {
      backgroundColor: "#F5F7F8",
        marginTop: 20,
        height: "100%",
        padding: 15
        
    },

    card: {
      height: 110,
      width: "100%",
      // borderWidth: 2,
      // borderColor: "red",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      // borderBottomLeftRadius: 20,
      // borderBottomRightRadius: 20
      borderRadius: 20,
      // shadowColor: '#000',
      // shadowOffset: { width: 0, height: 6 },
      // shadowOpacity: 0.3,
      // shadowRadius: 8,
      // Shadow for Android
      backgroundColor: "white",
      // elevation: 6,
      // marginLeft: 10,
      
      flexDirection: "row"
    },

    btn: {
      height: 110,
      width: 340,
      marginTop: 15,
      borderRadius: 20,
      // display: "flex",
      // alignItems: "center",
      // justifyContent: "center",

    },
    bld:{
      fontWeight:"500",
      fontSize: 15
    },

    nrm:{
      fontWeight:"400",
      fontSize: 11
    }
    
})