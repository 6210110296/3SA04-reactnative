import React, { useEffect, useState } from 'react';
import { ImageBackground, Text, StyleSheet, View } from 'react-native';
import Forecast from './Forecast';
export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: '-',
        description: '-',
        icon: '-',
        temp: 0
    })
    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=1aee8ee10acf16e9c8d3b1b69b414ba6`)
                .then((response) => response.json())
                .then((json) => {
                    setForecastInfo({
                        main: json.weather[0].main,
                        description: json.weather[0].description,
                        temp: json.main.temp,
                        icon: json.weather[0].icon
                    });
                })
                .catch((error) => {
                    console.warn(error);
                });
        }
    }, [props.zipCode])
    return (
        <ImageBackground source={require('./bg.jpg')} style={styles.backdrop}>
            <View style={styles.back}>
                <Text style={{ color: "white", alignItems: 'center' }}>zipCode : {props.zipCode}</Text>
                <Forecast {...forecastInfo} />

            </View>
        </ImageBackground >

    );
}

const styles = StyleSheet.create({
    backdrop: {
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#dc143c',
        width: '100%',
        height: '100%'
    },
    back: {
        backgroundColor: "rgba(0,0,0,0.5)",
        color: "white",
        flexDirection: 'column',
        alignItems: 'center',
        width: "100%",
        height: "30%",
    }
})