import React, { Component } from 'react';
import {View,TouchableOpacity,ImageBackground,SafeAreaView,Text,Platform,StatusBar,Image,StyleSheet,Alert} from 'react-native'
import axios from 'axios'
import MapView,{Marker} from 'react-native-maps';

export default class IssLocationScreen extends Component {
    constructor(props){
        super(props);
        this.state={
            location:{}
        }
    }
    componentDidMount(){
        this.getIssLocation()
    }
    getIssLocation=()=>{
        axios
        .get("https://api.wheretheiss.at/v1/satellites/25544")
        .then(response=>{
            this.setState({
                location:response.data
            })
        })
        .catch(error=>{alert(response)})
    }   

    render() {
        if(Object.keys(this.state.location).length===0){
            return(
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    <Text>Loading....</Text>
                </View>
            )
        }else{

        
        return (
            <View
                style={{
                    flex: 1,
                   }}>
                <ImageBackground
                style={{resizeMode:'cover',flex:1}}
                source={require("../assets/iss_bg.jpg")}
                > 
                <View>
                <Text>ISS Location Screen!</Text>
                </View>
                <MapView 
                style={styles.map} 
                region={{
                    latitude:this.state.location.latitude,
                    longitude:this.state.location.longitude,
                    latitudeDelta:100,
                    longitudeDelta:100
                }}
                >
                <Marker coordinate={{latitude:this.state.location.latitude,longitude:this.state.location.longitude}}>
                <Image style={{width:50,height:50}} source={require("../assets/iss_icon.png")}>

                </Image>
                </Marker>
                </MapView>
                <Text>
                    latitude:{this.state.location.latitude}
                </Text>
                <Text>
                    longitude:{this.state.location.longitude}
                </Text>
                <Text>
                    Altitude km:{this.state.location.altitude}
                </Text>
                <Text>
                    Velocity:{this.state.location.velocity}
                </Text>
            
                </ImageBackground>
            </View>
        )
       
            } 
    }
}

const styles = StyleSheet.create({
    map:{
        width:'100%',
        height:'100%'
    }
})