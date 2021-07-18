import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { FlatList, View, Text, StyleSheet, ImageBackground } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
]
const ZipItem = ({ place, code, navigation }) => (
    <TouchableHighlight onPress={() => {
        navigation.navigate('Weather', { zipCode: code })
    }}>
        <View style={styles.zipItem}>
            <Text style={styles.zipPlace}>{place}</Text>
            <Text style={styles.zipCode}>{code}</Text>
        </View>
    </TouchableHighlight>

)
export default function zipCodeScreen() {
    const navigation = useNavigation()
    return (
        <FlatList
            data={availableZipItems}
            keyExtractor={item => item.code}
            renderItem={({ item }) => <ZipItem{...item} navigation={navigation} />}
        />
    )
}
const styles = StyleSheet.create({
    zipItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    zipPlace: {
        padding: '10%',
        flex: 1,
    },
    zipCode: {
        padding: '10%',
        flex: 1
    },
    hatyai: {

    }
});