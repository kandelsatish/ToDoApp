import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Touchable, TouchableOpacity, Keyboard } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default function Edit({route}) {
    const {item,update_todo}=route.params;
    const {id}=item;

    console.log(item)
    const [todo, setTodo] = useState(item.todo_name);
    const handleUpdate = (todo,id) => {
        if (!todo) {
            alert('Please fill todo');
            Keyboard.dismiss();
            return;
        }
        else{
            update_todo(todo,id)
            Keyboard.dismiss();
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <TextInput value={todo} style={styles.textInput} onChangeText={(val) => setTodo(val)} />
                <TouchableOpacity style={styles.btn} onPress={() =>handleUpdate(todo,id)}>
                    <FontAwesome name="plus" size={30} color={'blue'} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => {}}>
                    <Text style={{fontSize:20}}>Cancel</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    form: {
        width: '90%',
        marginTop: 50

    },
    btn: {
        marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput: {
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 10,
        height: 70,
        fontSize: 25,
        padding: 5
    }
})

