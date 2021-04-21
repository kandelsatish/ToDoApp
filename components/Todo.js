import React from 'react'
import { StyleSheet, Touchable, TouchableOpacity } from 'react-native'
import { Body, Card, Textarea, CardItem, Container, Content, Header, Text, View } from 'native-base'
import Entypo from 'react-native-vector-icons/Entypo'
export default function Todo() {
    return (
        <TouchableOpacity>
            <Card style={styles.container}>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Text numberOfLines={3} style={{ marginLeft: 20 }}>Your text here</Text>
                </View>
                <View style={{ justifyContent: 'center' }}>
                    <TouchableOpacity style={{ marginRight: 20 }} >
                        <Entypo name="circle-with-cross" size={35} color={"red"} />
                    </TouchableOpacity>
                </View>
            </Card>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        margin: 5,
        height: 80,
        borderRadius: 5,
        flexDirection: 'row'
    },
})
