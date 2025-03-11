
import { View, Text , StyleSheet ,TextInput,SafeAreaView , ScrollView , Button, TouchableOpacity, Image  } from 'react-native'
import React , {useState , useRef, useEffect} from 'react'
import { AntDesign , Ionicons } from '@expo/vector-icons';
import { Video, ResizeMode } from 'expo-av';
import { useRouter } from 'expo-router';
import Category from '@/components/category';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Courselist from '@/components/courselist';


export default function all() {

  const video = useRef(null);
  
  const [status, setStatus] = useState(false);
  const [inpval, setinput] = useState("");

  const router = useRouter();

  function navigate_vedio (){
    router.push('/videoplayer')
  }
//@ts-ignore
  const handleInput = (e)=>{
   
    setinput(e.target.value);
    console.log(e.target.value);
  }

  useEffect(()=>{
    if(inpval === ""){
      setStatus(false);
    }
    else{
      setStatus(true);
    }

  },[inpval])

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.main}>

      <View style={styles.bar}> 

      <FontAwesome name="search" size={22} style={styles.icon} color="gray" />
      
      
      <TextInput onChange={(e)=>{handleInput(e)}} value={inpval} style={styles.inp} placeholder='Search for courses'></TextInput>
    </View>
    {status === true? <View style={styles.cont}>

    </View>: <></>}

       {/* <Category></Category> */}
        
      <Courselist/>

      </ScrollView>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
    main: {
        backgroundColor: "#F5F7F8",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        height: "100%"
        
      },
    
    inp:{
        height: 40,
        width: "85%",
        
    },
    bar:{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        flexDirection: "row",
        // borderRadius: 30,
        // borderWidth: 1,
        // borderBottomWidth: 1,
        // borderColor: "gray",
        height: 50,
        // marginTop: 0,
        backgroundColor: "white",
        // padding: 15
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        
        elevation: 6,
    },
    icon: {
        marginLeft: 20
    },

    cont: {
      height: 150,
      width: "100%",
      backgroundColor: "white",
      marginTop: 5,
      borderBottomWidth: 2,
      borderBottomColor: "yellow"

    }
 
 
});