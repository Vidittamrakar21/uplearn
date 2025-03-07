import { View, Text , StyleSheet, ScrollView ,Button} from 'react-native'
import React from 'react'

export default function Review() {
  return (
   <ScrollView style={styles.main}>
    <Text style={styles.txt}>Students Feedback</Text>

    <View style={styles.card}>
    <Text style={styles.nm}>Rohan Prasad</Text>
    <Text style={styles.nrm}>⭐⭐⭐⭐ &nbsp; &nbsp; 2 weeks ago</Text>
    <Text style={styles.rv}>
        I have purchased this course three months ago , now I'm giving the honest review about this course.
        The course content is great! Tutor explained all the topics in detailed.
        Amazing course for someone who is just starting . Specially beginners will get huge benifit.
    </Text>

    </View>
    <View style={styles.card}>
    <Text style={styles.nm}>Rohan Prasad</Text>
    <Text style={styles.nrm}>⭐⭐⭐⭐ &nbsp; &nbsp; 2 weeks ago</Text>
    <Text style={styles.rv}>
        I have purchased this course three months ago , now I'm giving the honest review about this course.
        The course content is great! Tutor explained all the topics in detailed.
        Amazing course for someone who is just starting . Specially beginners will get huge benifit.
    </Text>

    </View>

    <View style={styles.card}>
    <Text style={styles.nm}>Rohan Prasad</Text>
    <Text style={styles.nrm}>⭐⭐⭐⭐ &nbsp; &nbsp; 2 weeks ago</Text>
    <Text style={styles.rv}>
        I have purchased this course three months ago , now I'm giving the honest review about this course.
        The course content is great! Tutor explained all the topics in detailed.
        Amazing course for someone who is just starting . Specially beginners will get huge benifit.
    </Text>

    </View>

    <View style={styles.card}>
    <Text style={styles.nm}>Rohan Prasad</Text>
    <Text style={styles.nrm}>⭐⭐⭐⭐ &nbsp; &nbsp; 2 weeks ago</Text>
    <Text style={styles.rv}>
        I have purchased this course three months ago , now I'm giving the honest review about this course.
        The course content is great! Tutor explained all the topics in detailed.
        Amazing course for someone who is just starting . Specially beginners will get huge benifit.
    </Text>

    </View>

   <View style={styles.bx}>
   <View style={styles.btn}>
        <Text>See more reviews</Text>
    </View>
   </View>


   </ScrollView>
  )
}

const styles = StyleSheet.create({
    main: {
     
        // display: "flex",
        marginTop: 20,
        // marginBottom: 20
        

    },
   
    card: {
        width: "90%",
        display: 'flex',
        alignItems: "flex-start",
        justifyContent: "center",
        padding: 5,
        marginTop: 20,
        paddingLeft: 20
    },
    txt: {
        fontSize: 17,
        fontWeight: "500",
        marginLeft: 10
    },
    nm: {
        fontSize: 15,
        fontWeight: "500",
        
    },
    rv: {
   
       marginTop: 10
        
    },

    nrm:{
        fontWeight:"400",
        fontSize: 11
    },

    btn:{
        width: "90%",
        height: 40,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 2,
        borderColor: "#FFCD38",
        backgroundColor: "white",
        
        // marginLeft: "10%"
      
    },
    bx:{
        width: "100%",
        height: 40,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop : 20,
        marginBottom: 20,
    }
    


})