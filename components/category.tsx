import { View, Text , ScrollView , StyleSheet} from 'react-native'
import React from 'react'

export default function Category() {
  return (
    <View style={styles.cont}>
    <Text style={styles.txt}>Categories</Text>
    <View style={styles.main}>
      <Text style={styles.cat}>Development</Text>
      <Text style={styles.cat}>IT & Software</Text>
      <Text style={styles.cat}>Business</Text>
      <Text style={styles.cat}>Finance & Accounting</Text>
      <Text style={styles.cat}>Office Productivity</Text>
      <Text style={styles.cat}>Personal Development</Text>
      <Text style={styles.cat}>Design</Text>
      <Text style={styles.cat}>LifeStyle</Text>
      <Text style={styles.cat}>Marketing</Text>
      <Text style={styles.cat}>Health & Fitness</Text>
      <Text style={styles.cat}>Photography & Vedio</Text>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
    cat:{
        height: 38,
        minWidth: 20,
        padding: 10,
        borderRadius: 20,
        // backgroundColor: "#FFCD38",
        borderWidth: 2,
        borderColor: "#FFCD38",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 10,
        marginTop: 10,
        backgroundColor: 'white'
    },
    txt: {
        fontSize: 17,
        fontWeight: "500",
        marginLeft: 10
    },
    cont: {
        marginTop: 20,
        height: 280
    },
    main:{
        marginTop: 15,
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        flexDirection: "row",
        height: 250,
        width: 340,
        flexWrap: "wrap",
        // borderWidth: 2,
        // borderColor: "black"
    }
})