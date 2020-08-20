import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';


const logo =  {
  uri : "https://reactnative.dev/img/tiny_logo.png",
  width: 100,
  height: 100,
  align:'center'
};
const CustomView = () => {
  return(
    <ScrollView maximumZoomScale = {2.0} >
      <View>  
        <Text style = {{fontSize:85}}>Scroll me please</Text>     
       <Image source = {logo}/>
       <Image source = {logo}/>
       <Image source = {logo}/>
       <Image source = {logo}/>
       <Image source = {logo}/>
       <Image source = {logo}/>
       <Image source = {logo}/>
      </View>
    </ScrollView>
  )
}

export default CustomView;
