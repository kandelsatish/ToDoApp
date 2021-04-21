import { Container, Content } from 'native-base'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import InputForm from './InputForm'
export default function Add() {
    return (
        <View style={styles.container}>
            <InputForm />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,

    }

})