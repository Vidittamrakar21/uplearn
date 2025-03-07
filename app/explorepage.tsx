import { View, Text , StyleSheet ,SafeAreaView , ScrollView , Button, TouchableOpacity, Image  } from 'react-native'
import React , {useState , useRef} from 'react'
import { AntDesign , Ionicons } from '@expo/vector-icons';
import { Video, ResizeMode } from 'expo-av';
import { useRouter } from 'expo-router';
import Baught from '@/components/baught';
import Review from '@/components/review';
export default function Explorepage() {

  const video = useRef(null);
  
  const [status, setStatus] = useState({});

  const router = useRouter();

  function navigate_vedio (){
    router.push('/videoplayer')
  }

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.main}>

        <View style={styles.card}>


           <Image style={styles.img} source={require('../assets/images/img4.jpg')}></Image>

            <View style={styles.bxa}>
            <Text style={styles.bld}>AI-ML Advance</Text>
            <Text >The AI & Machine Learning Advanced Course offers an in-depth dive into high-level ML and AI techniques, ideal for learners with foundational knowledge. You’ll explore advanced supervised and unsupervised learning, neural networks, deep learning frameworks, NLP, computer vision, and reinforcement learning. With hands-on projects and case studies, you’ll learn to build, optimize, and deploy robust models, with attention to scalability and ethical considerations. Led by industry experts, this course equips you to tackle real-world AI challenges across sectors like healthcare, finance, and autonomous systems, making you well-prepared to design and implement sophisticated machine learning solutions. </Text>
            <Text style={styles.nrm}>⭐⭐⭐⭐⭐ (62,258 Ratings)</Text>
            <Text style={styles.nrm}>9,28,633 Students Enrolled </Text>
            <Text style={styles.nrm}>64.1 Hours</Text>
            <Text style={styles.nrm}>By Hadelin de Ponteves</Text>
            <Text style={styles.bld}>&#8377; 1399</Text>
            </View>
            <TouchableOpacity style={styles.btn}><Text>Buy Now</Text></TouchableOpacity>
            
            <View style={styles.bxbtn}>
            <TouchableOpacity style={styles.btna}><Text>Add to cart</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btna}><Text>Add to whishlist</Text></TouchableOpacity>

            </View>
        </View>

        <View style={styles.sec}>
          <Text style={styles.txt1}>Sections</Text>

         <TouchableOpacity onPress={navigate_vedio}>
         <View style={styles.seg}>
            <View style={styles.textb}>
              <Text>Introductory Vedio</Text>
              <Text style={styles.t1}>18 min</Text>
            </View> 
          <AntDesign name="play" style={styles.icon}  color="black" size={20} />
          </View>
         </TouchableOpacity>

          <View style={styles.seg}>
            <View style={styles.textb}>
              <Text>Statistics & Probablitiy</Text>
              <Text style={styles.t1}>5 hrs</Text>
            </View> 
          <AntDesign name="play" style={styles.icon}  color="black" size={20} />
          </View>


          <View style={styles.seg}>
            <View style={styles.textb}>
              <Text>Predictive Models</Text>
              <Text style={styles.t1}>40 min</Text>
            </View> 
          <AntDesign name="play" style={styles.icon}  color="black" size={20} />
          </View>


          <View style={styles.seg}>
            <View style={styles.textb}>
              <Text>Machine Learning with Python</Text>
              <Text style={styles.t1}>9 hrs</Text>
            </View> 
          <AntDesign name="play" style={styles.icon}  color="black" size={20} />
          </View>


          <View style={styles.seg}>
            <View style={styles.textb}>
              <Text>Deep Learning and Neural Networks</Text>
              <Text style={styles.t1}>11 hrs</Text>
            </View> 
          <AntDesign name="play" style={styles.icon}  color="black" size={20} />
          </View>

          <View style={styles.seg}>
            <View style={styles.textb}>
              <Text>Generative Models</Text>
              <Text style={styles.t1}>4 hrs</Text>
            </View> 
          <AntDesign name="play" style={styles.icon}  color="black" size={20} />
          </View>

          <View style={styles.seg}>
            <View style={styles.textb}>
              <Text>LLM's</Text>
              <Text style={styles.t1}>6 hrs</Text>
            </View> 
          <AntDesign name="play" style={styles.icon}  color="black" size={20} />
          </View>


        </View>

        <Baught/>

        <Review/>
        
      

      </ScrollView>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  main: {
    backgroundColor: "#F5F7F8",
    display: "flex",
    // justifyContent: "flex-start",
    // alignItems: "center",
    // height: "100%"
    
  },

  img:{
    height: 180,
    width: "100%",
    // borderRadius: 20,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20
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
  width: "100%",
  padding: 15

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
  height: 745,
  width: "100%",
  // borderWidth: 2,
  // borderColor: "red",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  // borderBottomLeftRadius: 20,
  // borderBottomRightRadius: 20
  // borderRadius: 20,
  // shadowColor: '#000',
  // shadowOffset: { width: 0, height: 6 },
  // shadowOpacity: 0.3,
  // shadowRadius: 8,
  
  backgroundColor: "white",
 
},

btn: {
  height: 38,
  width: "95%",
  backgroundColor: "#FFCD38",
  borderRadius: 8,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

},
bld:{
  fontWeight:"700",
  fontSize: 22
},

nrm:{
  fontWeight:"400",
  fontSize: 15
},

bxbtn: {
  height: 42,
  width: "98%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
  flexDirection: "row",
  marginTop: 8
  // padding: 10
},

btna: {
        height: 38,
        width: "48%",
        borderRadius: 8,
        // backgroundColor: "#FFCD38",
        borderWidth: 2,
        borderColor: "#FFCD38",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // marginLeft: 10,
        // marginTop: 10,
        backgroundColor: 'white'
},

  sec: {
    width: "100%",
    height: 500,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start" ,
    backgroundColor: "white",
  },

  seg: {
    width: "93%",
    height: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between", 
    flexDirection: "row",
    backgroundColor: "white",
    marginTop: 10,
    borderWidth: 0.5,
    borderColor: "gray",
    
  },

  icon: {
    marginRight: 10
  },

  textb: {
    marginLeft: 15
  },

  t1: {
    fontSize: 12,
    color: "gray"
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#000',
    width: '100%',
    height: 180,
  },
  video: {
    alignSelf: 'center',
    width: '100%',
    height: 180,
  },
  controls: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  
  txt1: {
    fontSize: 19,
    fontWeight: "500",
    marginLeft: 30,
    textAlign: "left",
    width: "100%"
},

 
 
});