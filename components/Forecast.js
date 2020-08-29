import React from 'react'
import { View, Text, ImageBackground, Image, StyleSheet } from 'react-native'

export default function Forecast(props){
    // console.log(props.name)
    var picture = "";
    var nameProv = "";
    
    if (props.name == "Hat Yai") {
        nameProv = props.name;
        picture = require("../image/Hatyai.jpg");
    }
    if (props.name == "Trang") {
        nameProv = props.name;
        picture = require("../image/Trang.jpg");
    }
    if (props.name == "Pattani") {
        nameProv = props.name;
        picture = require("../image/Pattani.jpg");
    }
    if (props.name == "Chiang Mai") {
        nameProv = props.name;
        picture = require("../image/Chiangmai.jpg");
    }
    if (props.name == "Khon Kaen") {
        nameProv = props.name;
        picture = require("../image/Khonkaen.jpg");
    }
    if (props.name == "Chonburi") {
        nameProv = "Chonburi";
        picture = require("../image/Chonburi.jpg");
    }

    var bg = require("../image/Sky.jpg");
        if(props.main == "Clouds"){
            bg = require("../image/Cloud.jpg");
        }
        if(props.main == "Rain"){
            bg = require("../image/Rain1.jpg");
        }



    return(
        <ImageBackground source={bg} style={styles.backdrop1}>
        <View style={styles.backdrop}>
            <Text style={styles.h1} > {nameProv} </Text>
            <Text style={styles.h2} > {props.main} </Text>
            <Text style={styles.h2} > {props.description} </Text>
            <Text style={styles.h2} > {props.temp} °C </Text>
            <Text style={styles.h2} > Feel like :{props.feel} °C </Text>

            <View style={{paddingTop: '10%'}}>
                <Image source={picture} style={{width: 350, height: 200}} />
            </View>
        </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({

    h1: {
        fontSize: 30, 
        fontWeight: 'bold',
        color: '#000000',
        paddingTop: '10%',
    },

    h2: {
        fontSize: 30,
        color: '#000000',
        alignItems: 'center',
    },

    backdrop: {
        flexDirection: 'column', //Default Portrait
        justifyContent: 'center',
        alignItems: 'center', // opposite of FlexDirection is lanscape
        width: '100%',
        height: '100%',
    },

    backdrop1: {
        flexDirection: 'column', //Default Portrait
        justifyContent: 'center',
        alignItems: 'center', // opposite of FlexDirection is lanscape
        width: '100%',
        height: '100%',
        opacity: 0.7,
    }

})