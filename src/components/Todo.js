import React, { useContext } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import { Card } from 'react-native-paper'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import {Context} from '../context/ToDoContext'
export default function Todo({ item, navigation }) {
    const { deleteTodo } = useContext(Context)
    return (
        <Card style={styles.card}>
            <View style={styles.containt}>
                <View style={styles.title}>
                    <Text style={styles.text} >{item.title}</Text>
                </View>
                <View style={styles.icons}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Edit', { item })}
                        style={{ marginRight: 15 }}>
                        <AntDesign name="edit" size={30} color={'green'} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => deleteTodo(item.id)}>
                        <MaterialCommunityIcons name="delete-forever" size={30} color={'red'} />
                    </TouchableOpacity>
                </View>
            </View>
        </Card>
    )
}
const styles = StyleSheet.create({
    card: {
        height: 70,
        marginHorizontal: 8,
        marginTop: 10,
        justifyContent: 'space-around',
        borderRadius: 10
    },
    containt: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10
    },
    text: {
        fontSize: 20,
    },
    icons: {
        flexDirection: 'row',
        marginRight: 5
    },
    title:{
         flex: 1, 
         height: '100%'
    }
})
