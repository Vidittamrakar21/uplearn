import { View, Text ,ScrollView , Image , StyleSheet , TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

export default function checkout() {
    const router = useRouter();

    function navigate_payment(){
        router.push('/payment');
    }
  return (
    <SafeAreaView style={styles.home}>
      <Text style={styles.txt}>Summary</Text>

    <ScrollView   style={styles.main}>



          
          <TouchableOpacity  style={styles.btn}>
          <View style={styles.card}>
          <Image style={styles.img}  resizeMode="stretch" source={require('../assets/images/img12.jpg')}></Image>
            <View style={styles.bxa}>
            <Text style={styles.bld}>Rust Crash Course</Text>
            <Text style={styles.nrm}>⭐⭐⭐⭐ (21,503 Ratings)</Text>
            <Text style={styles.nrm}>2,10,966 Students Enrolled </Text>
            <Text style={styles.nrm}>13.2 Hours</Text>
            <Text style={styles.nrm}>By Hadelin de Ponteves</Text>
            <Text style={styles.bld}>&#8377; 599</Text>
          {/* <Text style={styles.bld}>&#8377; 1399</Text> */}
          </View>
          </View>

          </TouchableOpacity>


          
          <TouchableOpacity style={styles.btn}>
          <View style={styles.card}>
          <Image style={styles.img}  source={require('../assets/images/img11.jpeg')}></Image>
            <View style={styles.bxa}>
            <Text style={styles.bld}>Full Golang</Text>
            <Text style={styles.nrm}>⭐⭐⭐ (2,258 Ratings)</Text>
            <Text style={styles.nrm}>28,633 Students Enrolled </Text>
            <Text style={styles.nrm}>44.1 Hours</Text>
            <Text style={styles.nrm}>By Hadelin de Ponteves</Text>
            <Text style={styles.bld}>&#8377; 999</Text>
          {/* <Text style={styles.bld}>&#8377; 699</Text> */}
          </View>
          </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn}>
          <View style={styles.card}>
         <Image style={styles.img} resizeMode="stretch" source={require('../assets/images/img9.jpeg')}></Image>
            <View style={styles.bxa}>
            <Text style={styles.bld}>Javascript</Text>
            <Text style={styles.nrm}>⭐⭐⭐⭐ (81,455 Ratings)</Text>
            <Text style={styles.nrm}>13,25,455 Students Enrolled </Text>
            <Text style={styles.nrm}>32.2 Hours</Text>
            <Text style={styles.nrm}>By Hadelin de Ponteves</Text>
            <Text style={styles.bld}>&#8377; 999</Text>
          {/* <Text style={styles.bld}>&#8377; 699</Text> */}
          </View>
          </View>
          </TouchableOpacity>


          <View style={styles.card2}>
        
        <View style={styles.bxa}>
     
       
       <Text style={styles.bld}>Subtotal - &#8377; 2597</Text>
      
       <Text style={styles.bld}>Discount <Text style={styles.grn}>- &#8377; 300</Text></Text>
       <Text style={styles.bld}>Amount To Pay - &#8377; 2297</Text>
        </View>
         
 
       </View>
          





    </ScrollView>

    

    <TouchableOpacity onPress={navigate_payment} style={styles.btn2}><Text>Pay - ₹ 2597</Text></TouchableOpacity>
    
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

  grn:{
    color:"green"
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

    card2: {
        height: 110,
        width: "100%",
        // borderWidth: 2,
        // borderColor: "red",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        marginTop: 10,
        flexWrap: "wrap",
        
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
        
        flexDirection: "column"
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
    btn2: {
      height: 38,
      width: "100%",
      backgroundColor: "#FFCD38",
      borderRadius: 8,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      bottom: 10
    
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