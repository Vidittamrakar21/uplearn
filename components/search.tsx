import { View, Text , StyleSheet , TextInput} from 'react-native'
import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function Search() {
  return (
    <View style={styles.bar}> 
      <FontAwesome name="search" size={22}  color="gray" />
      <TextInput style={styles.inp} placeholder='Search for courses'></TextInput>
    </View>
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
        justifyContent: "space-evenly",
        width: 320,
        flexDirection: "row",
        borderRadius: 30,
        borderWidth: 1,
        borderColor: "gray",
        height: 40,
        marginTop: 120,
        backgroundColor: "white"
    }
})