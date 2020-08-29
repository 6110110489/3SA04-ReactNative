import React, { useState, useEffect } from 'react'
import Forecast from './Forecast'

export default function Weather(props) {

    const [forecastInfo, setForecastInfo] = useState({
        main: '-',
        description: '-',
        temp: 0 ,
        name: '-',
        feel: 0
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
                    temp:json.main.temp,
                    name: json.name,
                    feel: json.main.feels_like
                });
            })
            .catch((error)=>{
                console.warn(error);
            });
        }
    },[props.zipCode])

    return(
        <Forecast {...forecastInfo} />
    );

}

/*const styles = StyleSheet.create({
    backdrop:{
        alignItems:'center',
        width:'100%',
        height:'100%',
    },
});*/