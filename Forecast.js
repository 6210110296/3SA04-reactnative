import { Text, View, Image, StyleSheet } from 'react-native';
import React from 'react';
export default function Forecast(props) {
    const image = 'http://openweathermap.org/img/wn/' + props.icon + '.png'
    return (
        <View style={styles.box}>
            <View style={styles.box}>
                <Text style={styles.Btext}>City : {props.city}{"\n"}Main : {props.main}{"\n"}Description : {props.description}</Text>
            </View>
            <View style={styles.box}>
                <Image source={{ url: image }} style={{ width: 100, height: 100, flexDirection: 'row', alignItems: 'center' }} />
            </View>
            <View style={styles.box}>
                <Text style={styles.Btext}>Temps : {props.temp} °C</Text>
            </View>
            <View style={styles.box}>
                <Text style={styles.Btext}>Temps : {props.feels_like} °C</Text>
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
        fontSize: 25,
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
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    }
})