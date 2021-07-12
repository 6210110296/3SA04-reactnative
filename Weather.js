import React, { useState } from 'react';
import { ImageBackground, Text, StyleSheet, View } from 'react-native';
import Forecast from './Forecast';
export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: '-',
        description: '-',
        temp: 0
    })
    return (
        <ImageBackground source={require('./bg.jpg')} style={styles.backdrop}>
            <View style={styles.back}>
                <Text style={{ color: "white" }}>zipCode : {props.zipCode}</Text>
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