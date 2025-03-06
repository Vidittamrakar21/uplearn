import { View, Text , StyleSheet , TextInput, TouchableOpacity} from 'react-native'
import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useRouter } from 'expo-router';


export default function Search() {

  const router = useRouter();

  function navigate_searchpage (){
    router.push('/searchpage')
  }

  return (
    <TouchableOpacity onPress={navigate_searchpage}>
      <View style={styles.bar}> 
      <View style={styles.bx}>
      <FontAwesome name="search" size={22}  color="gray" />
      <Text>Search for courses</Text>
      </View>
      {/* <TextInput style={styles.inp} placeholder='Search for courses'></TextInput> */}
    </View>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({

    inp:{
        height: 40,
        width: 280,
        
    },
    bar:{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: 320,
        flexDirection: "row",
        borderRadius: 30,
        borderWidth: 1,
        borderColor: "gray",
        height: 40,
        marginTop: 120,
        backgroundColor: "white"
    },
    bx: {
      display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        width: 180,
        flexDirection: "row",
        borderRadius: 30,
        height: 20,
      
        backgroundColor: "white"
    }
})