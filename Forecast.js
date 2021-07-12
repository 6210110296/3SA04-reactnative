import { Text, View, StyleSheet } from 'react-native';
import React from 'react';
export default function Forecast(props) {
    return (
        <View style={{ color: "white" }} >
            <Text style={styles.Btext}>{props.main}</Text>
            <Text style={styles.Btext}>{props.description}</Text>
            <View style={styles.box}>
                <Text style={styles.Btext}>{props.temp}</Text>
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
        color: "white"
    },
    Stext: {
        fontSize: 20,
        color: "white"
    },
    box: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})