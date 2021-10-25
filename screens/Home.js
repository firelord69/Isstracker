import React, { Component } from 'react';
import {View,TouchableOpacity,ImageBackground,SafeAreaView,Text,StatusBar,Image,StyleSheet} from 'react-native'

export default class HomeScreen extends Component {
    render() {
        return (
    <View style={styles.contanier}>
      <ImageBackground
      style={{flex:1}}
      source={require('../assets/bg_updates.jpg')}
      >

        <View>
         <Text style={styles.titleText}>Iss Tracker App</Text>
          </View>
         <TouchableOpacity onPress={
           ()=>this.props.navigation.navigate("IssLocation")
         } style={styles.routeCard}>
            <Text style={styles.routeText}>Iss Location</Text>
            <Text style={styles.knowmore}>Know More!</Text>
            <Image
           
            source={require("../assets/iss_icon.png")}
            style={styles.iconImage}
            >  
            </Image> 
          </TouchableOpacity> 

         <TouchableOpacity style={styles.routeCard}>
            <Text style={styles.routeText}>Meteors</Text> 
            <Image style={styles.iconImage} source={require('../assets/meteor_icon.png')}></Image>
         </TouchableOpacity>    
              

      </ImageBackground>
    </View>   
        )
    }
}

const styles = StyleSheet.create({
    contanier:{
      flex:1
    },
    routeCard:{
        flex:0.25,
        marginLeft:50,
        marginRight:50,
        marginTop:50,
        borderRadius:30,
        backgroundColor:"white"
    },
    titleText:{
        fontSize:40,
        fontWeight:"bold",
        color:"white"
    },
    routeText:{
      fontSize:35,
      fontWeight:"bold",
      color:"black",
      marginTop:25,
      paddingLeft:30
    },
    iconImage:{
      position:'absolute',
      width:'200',
      height:'200',
      resizeMode:'contain',
      right:20,
      top:-80
    },
    knowmore:{
      paddingLeft:30,
      color:"black",
      fontSize:15
    }
  })