import React,{useState} from 'react'
import {View,Text,StyleSheet} from 'react-native'
export default function ShowScreen({route}) {
    const {item}=route.params;
    const [title,setTitle]=useState(item.title)
    return (
        <View style={styles.show}>
            <Text style={styles.text}>{item.title}</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    show:{
        alignSelf:'center',
        marginTop:100,
        borderWidth:3,
        height:'20%',
        width:'90%',
        borderColor:'grey',
        padding:10,
        borderRadius:10
    },
    text:{
    fontSize:18
    }
})
