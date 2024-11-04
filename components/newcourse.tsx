import { View, Text ,ScrollView , Image , StyleSheet , TouchableOpacity} from 'react-native'
import React from 'react'


export default function Newcourses() {
  return (
    <View style={styles.cont} >
      <Text style={styles.txt}>New Courses Released</Text>
      <ScrollView horizontal  style={styles.box}>



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
            <TouchableOpacity style={styles.btn}><Text>Explore</Text></TouchableOpacity>
            </View>


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
            <TouchableOpacity style={styles.btn}><Text>Explore</Text></TouchableOpacity>
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
            <TouchableOpacity style={styles.btn}><Text>Explore</Text></TouchableOpacity>
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
            <TouchableOpacity style={styles.btn}><Text>Explore</Text></TouchableOpacity>
            </View>





      </ScrollView>
      
    </View>
  )
}

const styles = StyleSheet.create({

    img:{
        height: 120,
        width: 220,
        // borderRadius: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
        // marginLeft: 10
    },
    box: {
        height: 160,
        width: 350,
        display: "flex",
        marginTop: 10
       
    },

    bxa:{
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "center",
      // height: 330,
      width: 220,
      padding: 10

    },
    txt: {
        fontSize: 17,
        fontWeight: "500",
        marginLeft: 10
    },
    cont: {
        marginTop: 20,
        height: 330
    },

    card: {
      height: 285,
      width: 220,
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

    btn: {
      height: 30,
      width: 200,
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

    nrm:{
      fontWeight:"400",
      fontSize: 11
    }
    
})