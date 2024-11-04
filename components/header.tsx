import { View, Text , Image , StyleSheet } from 'react-native'
import React from 'react'

export default function Header() {
  return (
  <View  style={styles.head}>
      <View>
      <Text>Welcome !</Text>
      <Text style={styles.txt1}>Vidit Tamrakar</Text>
      </View>
      <Image style={styles.img} source={ require("../assets/images/ic.png")}/>
  </View>
  )
}

const styles = StyleSheet.create({
    img:{
        height: 40,
        width: 40
    },

    head: {
        height: 80,
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 20,
        flexDirection: "row",
        padding: 20,
        position: "absolute",
        top : 0,
        left: 0,
        right: 0,
        backgroundColor: "white",
        zIndex: 5,
        // borderBottomWidth: 1,
        // borderBottomColor: "gray"
      
        
    },

    txt1: {
        fontSize: 19,
        fontWeight: "500"
    }
})