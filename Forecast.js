import { Text, View, StyleSheet } from 'react-native';
import React from 'react';
export default function Forecast(props) {
    return (
        <View >
            <Text style={{ fontSize: 30 }}>{props.main}</Text>
            <Text style={{ fontSize: 30 }}>{props.description}</Text>
            <Text style={{ fontSize: 30 }}>{props.temp}°C</Text>
        </View >
    );
}