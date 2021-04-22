import React, { useEffect, useState } from 'react'
import { View, StyleSheet, StatusBar, FlatList, ScrollView } from 'react-native'
import { Body, Card, CardItem, Container, Content, Header, Text } from 'native-base'
import Todo from './Todo'
import { openDatabase } from 'react-native-sqlite-storage'

var db = openDatabase({ name: "todo.db", createFromLocation: 1 });

export default function Home({navigation}) {
    let [listoftodo, setlistoftodo] = useState([]);
    let [change,setChanged]=useState(false);
    console.log(listoftodo);
    useEffect(() => {
        db.transaction((tx) => {
            tx.executeSql('SELECT * FROM TodoList',
                [],
                (tx, results) => {
                    var temp = [];
                    for (let i = 0; i < results.rows.length; ++i)
                        temp.push(results.rows.item(i));
                    setlistoftodo(temp);
                });
        });
    }, [change])

    const removeFromList=(id)=>{
        listoftodo.filter( (item) =>{
            return item.id==id;
        })
        setChanged(!change)
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <StatusBar backgroundColor="#1a355b"/>
                {listoftodo.map((item) => {
                    return ( <Todo key={item.id} 
                        item={item} 
                        removeFromList={removeFromList}
                        navigation={navigation}
                        />)
                })}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 5

    }
})
