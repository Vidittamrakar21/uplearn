import { View, Text , StyleSheet ,TextInput,SafeAreaView , ScrollView , Button, TouchableOpacity, Image  } from 'react-native'
import React , {useState , useRef} from 'react'
import { AntDesign , Ionicons } from '@expo/vector-icons';
import { Video, ResizeMode } from 'expo-av';
import { useRouter } from 'expo-router';
import Category from '@/components/category';
import FontAwesome from '@expo/vector-icons/FontAwesome';


export default function Searchpage() {

  const video = useRef(null);
  
  const [status, setStatus] = useState({});

  const router = useRouter();

  function navigate_vedio (){
    router.push('/videoplayer')
  }

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.main}>

      <View style={styles.bar}> 

      <FontAwesome name="search" size={22} style={styles.icon} color="gray" />
      
      
      <TextInput style={styles.inp} placeholder='Search for courses'></TextInput>
    </View>

       <Category></Category>
        
      

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
    }
 
 
});