import { Text, View, Image, StyleSheet } from 'react-native';
import React from 'react';
export default function Forecast(props) {
    const image = 'http://openweathermap.org/img/wn/' + props.icon + '.png'
    return (
        <View style={{ color: "white" }} >
            <Text style={styles.Btext}>City : {props.city}</Text>
            <Text style={styles.Btext}>{props.main}</Text>
            <Text style={styles.Btext}>{props.description}</Text>
            <Image source={{ url: image }} style={{ width: 100, height: 100 }} />
            <View style={styles.box}>
                <Text style={styles.Btext}>Temps : {props.temp}</Text>
                <Text style={styles.Stext}>°C</Text>
            </View>
            <View style={styles.box}>
                <Text style={styles.Btext}>Temps : {props.feels_like}</Text>
                <Text style={styles.Stext}>°C</Text>
            </View>
        </View >
    );
}
const styles = StyleSheet.create({
    backdrop: {
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    Btext: {
        fontSize: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        color: "white"
    },
    Stext: {
        fontSize: 20,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        color: "white"
    },
    box: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
})