import { Container, Content } from 'native-base'
import React, { useEffect, useState,useContext } from 'react'
import { View, Text, StyleSheet, Alert, Keyboard } from 'react-native'
import InputForm from './InputForm'
import {openDatabase} from 'react-native-sqlite-storage'
import {Contx} from './GlobalState'
var db=openDatabase({name:"todo.db" ,createFromLocation : 1});

export default function Add() {
    const {change,setChanged}=useContext(Contx);
    const [todoname, setTodoName] = useState('');
    const add_todo = (todoname) => {
        db.transaction(function (tx) {
            tx.executeSql(
                'INSERT INTO TodoList(todo_name) VALUES (?)',
                [todoname],
                (tx, results) => {
                    console.log('Results', results.rowsAffected);
                    if (results.rowsAffected > 0) {
                        Alert.alert(
                            'Success',
                            'Your todo added successfully',
                            [
                                {
                                    text: 'Dissmiss',
                                },
                            ],
                            { cancelable: false },
                        );
                        setChanged(!change);
                    } else alert('Couldnt add todo Failed');
                },
            );
        });
    };
    
    return (
        <View style={styles.container}>
            <InputForm add_todo={add_todo}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,

    }

})