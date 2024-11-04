import { Image, StyleSheet, Platform , SafeAreaView , ScrollView , StatusBar} from 'react-native';
import { Link } from 'expo-router';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Header from '@/components/header';
import Search from '@/components/search';
import Courses from '@/components/courses';
import Popular from '@/components/popular';
import Category from '@/components/category';
import Newcourses from '@/components/newcourse';
export default function HomeScreen() {
  return (
   <SafeAreaView >
    <StatusBar backgroundColor="#ffffff"></StatusBar>
    <Header/>
    <ScrollView contentContainerStyle={styles.main} horizontal={ false}>

    <Search/>
    <Courses/>
    <Popular/>
    <Category/>
    <Newcourses/>
    </ScrollView>

   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#F5F7F8",
    
    // height: "100%",
    // padding: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
  ,
  sbt: {
    backgroundColor: "white",
  }
 
});
