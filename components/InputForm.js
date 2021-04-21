import React,{useState} from 'react'
import { View, Text, StyleSheet, TextInput, Touchable, TouchableOpacity,Keyboard} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
export default function InputForm() {
    const [focus,setFocus]=useState(false);
    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <TextInput placeholder="Add Item to add" style={styles.textInput} />
                <TouchableOpacity style={styles.btn} onPress={()=>Keyboard.dismiss()}>
                    <FontAwesome name="plus" size={30} color={'blue'}/>
                </TouchableOpacity>
            </View>

        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center'
    },
    form:{
        width:'90%',
        marginTop: 50
        
    },
    btn:{
        marginTop:40,
        justifyContent:'center',
        alignItems:'center'
    },
    textInput:{
        borderColor: 'grey',
         borderWidth: 1,
         borderRadius:10,
         height:70,
         fontSize:25,
         padding:5
    }
})

