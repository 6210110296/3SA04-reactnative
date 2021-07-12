import React from 'react';
import { FlatList, View, Text, StyleSheet, } from 'react-native';

const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
]
const ZipItem = ({ place, code, navigation }) => (
    <View style={styles.zipItem}>
        <Text style={styles.zipPlace}>{place}</Text>
        <Text style={styles.zipCode}>{code}</Text>
    </View>
)
export default function zipCodeScreen() {
    return (
        <FlatList
            data={availableZipItems}
            keyExtractor={item => item.code}
            renderItem={({ item }) => <ZipItem{...item} />}
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
});