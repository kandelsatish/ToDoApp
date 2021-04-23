import React, { useEffect, useState,useContext } from 'react'
import { View, StyleSheet, StatusBar, FlatList, ScrollView } from 'react-native'
import { Body, Card, CardItem, Container, Content, Header, Text } from 'native-base'
import Todo from './Todo'
import {view_all} from './Api'
import {Contx} from './GlobalState'
export default function Home({navigation}) {
    const {change,setChanged}=useContext(Contx);
    let [listoftodo, setlistoftodo] = useState([]);
    console.log(listoftodo);

    useEffect(()=>{
        view_all(setlistoftodo);
    },[change])

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
