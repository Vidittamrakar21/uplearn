import { View, Text , ScrollView, TouchableOpacity , StyleSheet, Image} from 'react-native'
import React from 'react'

import { useRouter } from 'expo-router';

export default function Courselist() {

    const router = useRouter();

  const navigate_explore = ()=>{
    router.push('/explorepage')
  }


  return (
   <ScrollView>

    <View style={styles.mu}>
            <View style={styles.card}>
            <Image style={styles.img} source={require('../assets/images/img4.jpg')}></Image>
            <View style={styles.bxa}>
            <Text style={styles.bld}>AI-ML Advance</Text>
            <Text style={styles.nrm}>⭐⭐⭐⭐⭐ (62,258 Ratings)</Text>
            <Text style={styles.nrm}>9,28,633 Students Enrolled </Text>
            <Text style={styles.nrm}>64.1 Hours</Text>
            <Text style={styles.nrm}>By Hadelin de Ponteves</Text>
            <Text style={styles.bld}>&#8377; 1399</Text>
            </View>
            {/* <TouchableOpacity onPress={navigate_explore} style={styles.btn}><Text>Explore</Text></TouchableOpacity> */}
            </View>


            <View style={styles.card}>
            <Image style={styles.img} source={require('../assets/images/img6.jpg')}></Image>
            <View style={styles.bxa}>
            <Text style={styles.bld}>Data Science</Text>
            <Text style={styles.nrm}>⭐⭐⭐ (21,503 Ratings)</Text>
            <Text style={styles.nrm}>2,10,966 Students Enrolled </Text>
            <Text style={styles.nrm}>53.2 Hours</Text>
            <Text style={styles.nrm}>By Hadelin de Ponteves</Text>
            <Text style={styles.bld}>&#8377; 1199</Text>
            </View>
            {/* <TouchableOpacity style={styles.btn}><Text>Explore</Text></TouchableOpacity> */}
            </View>
    </View>


    <View style={styles.mu}>
           
            <View style={styles.card}>
            <Image style={styles.img} source={require('../assets/images/img5.png')}></Image>
            <View style={styles.bxa}>
            <Text style={styles.bld}>AI-ML Basics</Text>
            <Text style={styles.nrm}>⭐⭐⭐⭐ (81,455 Ratings)</Text>
            <Text style={styles.nrm}>13,25,455 Students Enrolled </Text>
            <Text style={styles.nrm}>32.2 Hours</Text>
            <Text style={styles.nrm}>By Hadelin de Ponteves</Text>
            <Text style={styles.bld}>&#8377; 899</Text>
            </View>
            {/* <TouchableOpacity style={styles.btn}><Text>Explore</Text></TouchableOpacity> */}
            </View>


            <View style={styles.card}>
            <Image style={styles.img} source={require('../assets/images/img7.jpeg')}></Image>
            <View style={styles.bxa}>
            <Text style={styles.bld}>MERN Stack</Text>
            <Text style={styles.nrm}>⭐⭐⭐⭐⭐ (1,21,610 Ratings)</Text>
            <Text style={styles.nrm}>19,88,690 Students Enrolled </Text>
            <Text style={styles.nrm}>80.5 Hours</Text>
            <Text style={styles.nrm}>By Hadelin de Ponteves</Text>
            <Text style={styles.bld}>&#8377; 699</Text>
            </View>
            {/* <TouchableOpacity style={styles.btn}><Text>Explore</Text></TouchableOpacity> */}
            </View>
    </View>


    <View style={styles.mu}>
            
            <View style={styles.card}>
            <Image style={styles.img} source={require('../assets/images/img8.png')}></Image>
            <View style={styles.bxa}>
            <Text style={styles.bld}>Blockchain / web3</Text>
            <Text style={styles.nrm}>⭐⭐⭐⭐⭐ (1,31,450 Ratings)</Text>
            <Text style={styles.nrm}>15,08,723 Students Enrolled </Text>
            <Text style={styles.nrm}>68.5 Hours</Text>
            <Text style={styles.nrm}>By Hadelin de Ponteves</Text>
            <Text style={styles.bld}>&#8377; 1399</Text>
            </View>
            {/* <TouchableOpacity style={styles.btn}><Text>Explore</Text></TouchableOpacity> */}
            </View>


            <View style={styles.card}>
            <Image style={styles.img} source={require('../assets/images/img11.jpeg')}></Image>
            <View style={styles.bxa}>
            <Text style={styles.bld}>Full Golang</Text>
            <Text style={styles.nrm}>⭐⭐⭐ (2,258 Ratings)</Text>
            <Text style={styles.nrm}>28,633 Students Enrolled </Text>
            <Text style={styles.nrm}>44.1 Hours</Text>
            <Text style={styles.nrm}>By Hadelin de Ponteves</Text>
            <Text style={styles.bld}>&#8377; 999</Text>
            </View>
            {/* <TouchableOpacity style={styles.btn}><Text>Explore</Text></TouchableOpacity> */}
            </View>
    </View>



    <View style={styles.mu}>
           
            <View style={styles.card}>
            <Image style={styles.img} source={require('../assets/images/img12.jpg')}></Image>
            <View style={styles.bxa}>
            <Text style={styles.bld}>Rust Crash Course</Text>
            <Text style={styles.nrm}>⭐⭐⭐⭐ (21,503 Ratings)</Text>
            <Text style={styles.nrm}>2,10,966 Students Enrolled </Text>
            <Text style={styles.nrm}>13.2 Hours</Text>
            <Text style={styles.nrm}>By Hadelin de Ponteves</Text>
            <Text style={styles.bld}>&#8377; 599</Text>
            </View>
            {/* <TouchableOpacity style={styles.btn}><Text>Explore</Text></TouchableOpacity> */}
            </View>


            <View style={styles.card}>
            <Image style={styles.img} source={require('../assets/images/img9.jpeg')}></Image>
            <View style={styles.bxa}>
            <Text style={styles.bld}>Javascript</Text>
            <Text style={styles.nrm}>⭐⭐⭐⭐ (81,455 Ratings)</Text>
            <Text style={styles.nrm}>13,25,455 Students Enrolled </Text>
            <Text style={styles.nrm}>32.2 Hours</Text>
            <Text style={styles.nrm}>By Hadelin de Ponteves</Text>
            <Text style={styles.bld}>&#8377; 999</Text>
            </View>
            {/* <TouchableOpacity style={styles.btn}><Text>Explore</Text></TouchableOpacity> */}
            </View>
    </View>



    <View style={styles.mu}>
           

            <View style={styles.card}>
            <Image style={styles.img} source={require('../assets/images/img6.jpg')}></Image>
            <View style={styles.bxa}>
            <Text style={styles.bld}>Data Science</Text>
            <Text style={styles.nrm}>⭐⭐⭐ (21,503 Ratings)</Text>
            <Text style={styles.nrm}>2,10,966 Students Enrolled </Text>
            <Text style={styles.nrm}>53.2 Hours</Text>
            <Text style={styles.nrm}>By Hadelin de Ponteves</Text>
            <Text style={styles.bld}>&#8377; 1199</Text>
            </View>
            {/* <TouchableOpacity style={styles.btn}><Text>Explore</Text></TouchableOpacity> */}
            </View>

            <View style={styles.card}>
            <Image style={styles.img} source={require('../assets/images/img10.jpeg')}></Image>
            <View style={styles.bxa}>
            <Text style={styles.bld}>Python</Text>
            <Text style={styles.nrm}>⭐⭐⭐⭐⭐ (1,21,610 Ratings)</Text>
            <Text style={styles.nrm}>19,88,690 Students Enrolled </Text>
            <Text style={styles.nrm}>30.5 Hours</Text>
            <Text style={styles.nrm}>By Hadelin de Ponteves</Text>
            <Text style={styles.bld}>&#8377; 999</Text>
            </View>
            {/* <TouchableOpacity style={styles.btn}><Text>Explore</Text></TouchableOpacity> */}
            </View>

            
    </View>







   </ScrollView>
  )
}

const styles = StyleSheet.create({
    img:{
        height: 100,
        width: "100%",
        // borderRadius: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
        // marginLeft: 10
    },
    // box: {
    //     height: 160,
    //     width: 350,
    //     display: "flex",
    //     marginTop: 10

        
       
    // },

    bxa:{
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "flex-start",
      height: 140,
      width: "100%",
      //  width: "100%",
      padding: 10

    },
    txt: {
        fontSize: 17,
        fontWeight: "500",
        marginLeft: 10
    },
    cont: {
        marginTop: 20,
        height: 330,
        // width: "100%"
    },

    card: {
      height: 240,
      width: "50%",
      // borderWidth: 2,
      // borderColor: "red",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      // borderBottomLeftRadius: 20,
      // borderBottomRightRadius: 20
      borderRadius: 20,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 6 },
      shadowOpacity: 0.3,
      shadowRadius: 8,
      // Shadow for Android
      backgroundColor: "white",
      elevation: 6,
      marginLeft: 10
    },
    // card2: {
    //   height: 285,
    //   width: 170,
     
    //   display: "flex",
    //   alignItems: "center",
    //   justifyContent: "center",
     
    //   marginLeft: 10
    // },

    btn: {
      height: 30,
      width: "87%",
      backgroundColor: "#FFCD38",
      borderRadius: 8,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",

    },
    bld:{
      fontWeight:"500",
      fontSize: 17
    },
    bld2:{
      fontWeight:"500",
      fontSize: 17,
      color: "purple"
    },

    nrm:{
      fontWeight:"400",
      fontSize: 11
    },

    mu:{
        width: "96%",
        height: 300,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        padding: 5

    }
})