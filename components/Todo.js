import React from 'react'
import { Alert, StyleSheet, Touchable, TouchableOpacity } from 'react-native'
import { Body, Card, Textarea, CardItem, Container, Content, Header, Text, View } from 'native-base'
import {openDatabase} from 'react-native-sqlite-storage'
import Entypo from 'react-native-vector-icons/Entypo'
var db = openDatabase({ name: "todo.db", createFromLocation: 1 });
export default function Todo({navigation,item,removeFromList}) {
    const {id}=item;
    console.log(id);
    let delete_todo = (id) => {
        db.transaction((tx) => {
            tx.executeSql(
                'DELETE FROM  TodoList where id=?',
                [id],
                (tx, results) => {
                    console.log('Results', results.rowsAffected);
                    if (results.rowsAffected > 0) {
                        Alert.alert(
                            'Success',
                            'Todo deleteddeleted successfully',
                            [
                                {
                                    text: 'Ok',
                                    //   onPress: () => navigation.navigate('HomeScreen'),
                                },
                            ],
                            { cancelable: false },
                        );
                    } else {
                        alert('Please insert a valid User Id');
                    }
                },
            );
        });
    };

    const handelDelete = (id) => {
        removeFromList(id);
        delete_todo(id);
    }

    let update_todo = (todoname,todoid) => {
        db.transaction((tx) => {
            tx.executeSql(
                'UPDATE  TodoList SET todo_name=? WHERE id=?',
                [todoname,todoid],
                (tx, results) => {
                    console.log('Results', results.rowsAffected);
                    if (results.rowsAffected > 0) {
                        Alert.alert(
                            'Success',
                            'Todo Updated successfully',
                            [
                                {
                                    text: 'Ok',
                                    onPress: ()=>navigation.goBack()
                                },
                            ],
                            { cancelable: false },
                        );
                    } else {
                        alert('Sorry something went wrong');
                    }
                },
            );
        });
    };

    return (
        <TouchableOpacity >
            <Card style={styles.container}>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Text numberOfLines={3} style={{ marginLeft: 20 }}>{item.todo_name}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity style={{ marginRight: 20 }} onPress={()=>navigation.navigate("Edit",{item,update_todo})} >
                        <Entypo name="edit" size={35} color={"green"} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginRight: 20 }} onPress={() => handelDelete(id)}>
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
