import React, { useState, useEffect } from 'react'
import { Text, StyleSheet, ImageBackground, View } from 'react-native'
import Forecast from './Forecast'

export default function Weather(props) {

    const [forecastInfo, setForecastInfo] = useState({
        main: '-',
        description: '-',
        temp: 0
    })

    useEffect(()=>{
        console.log(`fetchingdatawithzipCode=${props.zipCode}`)
        if(props.zipCode){
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=68adbb82ee5e8197265cc451261ab679`)
            .then((response)=>response.json())
            .then((json)=>{
                setForecastInfo({
                    main:json.weather[0].main,
                    description:json.weather[0].description,
                    temp:json.main.temp
                });
            })
            .catch((error)=>{
                console.warn(error);
            });
        }
    },[props.zipCode])

    return(
        <View>
            <ImageBackground source={require('../Sky1.jpg')} style={styles.backdrop}>
                <Text>Zip Code</Text>
                <Text>{props.zipCode}</Text>
                <Forecast{...forecastInfo}/>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    backdrop:{
        alignItems:'center',
        width:'100%',
        height:'100%',
    },
});