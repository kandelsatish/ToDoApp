import React,{useState} from 'react'
import {View,StyleSheet,Text,TouchableOpacity, TextInput, Alert} from 'react-native'
export default function TodoForm({initialValues,onSubmit}) {
    const [id,setId]=useState(initialValues.id);
    const [title, setTitle] = useState(initialValues.title);
    const handelSubmission=()=>{
        if(title!=''){
            onSubmit(id,title);
        }
        else{
            alert("Field Cannot be empty");
        }
        
    }
    return (
        <View style={styles.container}>
        <Text style={styles.text}>Enter New Todo</Text>
        <TextInput placeholder="Enter new Todo"
            autoCapitalize="sentences"
            value={title}
            onChangeText={(val) => setTitle(val)}
            style={styles.input}
            autoCorrect={true}
            />
        <TouchableOpacity style={styles.button} onPress={() =>handelSubmission()}>
            <Text style={styles.text}>Save</Text>
        </TouchableOpacity>
    </View>
    )
}


const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        marginTop: 100,
        height: 200,
        width: '90%',
        alignItems: 'center',
    },
    text: {
        alignSelf: 'center',
        color: '#fff',
        fontSize: 15
    },
    input: {
        fontSize: 15,
        width: '90%',
        borderWidth: 1,
        marginTop: 30,
        borderRadius: 5,
        borderColor: 'grey',
        padding:20,
        fontSize:20
    },
    button: {
        marginTop: 20,
        backgroundColor: 'grey',
        width: 100,
        height: 40,
        justifyContent: 'center',
        borderRadius: 5
    }
})

