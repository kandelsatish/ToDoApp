import React, { useState,useContext } from 'react'
import { View, Text, StyleSheet, TextInput, StatusBar, Touchable, TouchableOpacity, Keyboard, Alert } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Contx} from '../../components/GlobalState'
export default function Register({ navigation }) {
    // const {isRegistered,setIsRegistered}=useContext(Contx);
    const [userdata, setUserData] = useState({
        isloggredIn:false,
        isRegistered:false,
        email: '',
        password: '',
        conformpassword: ''
    })

    const storeData = async (value) => {
        try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem('userInfo', jsonValue)
            Alert.alert('Success',
            'Registered Successfully',
            [
                {
                    text: 'Ok',
                    onPress: ()=>{
                        navigation.goBack()
                        // setIsRegistered(true);
                        
                    }
                },
            ],
            { cancelable: false });
        } catch (e) {
            console.log(e);
        }
    }

    const handelSignUp = (userdata) => {
            if(userdata.email!='' && userdata.password!='' && userdata.conformpassword!='')
            {
                if(userdata.password!=userdata.conformpassword){
                    alert("Password do not matches");
                }
                else{storeData(userdata)};
            }
            else{alert("All information are required!")}
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'#fff'} />
            <View style={{ height: 200, width: '100%', alignItems: 'center', justifyContent: 'center', marginTop: 100 }}>
                <TextInput placeholder="Email" style={styles.inputText}
                    onChangeText={(val) => setUserData({ ...userdata, email: val })}
                />
                <TextInput placeholder="Password" style={styles.inputText}
                    secureTextEntry={true}
                    onChangeText={(val) => setUserData({ ...userdata, password: val })}
                />
                <TextInput placeholder="Conform-Password" style={styles.inputText}
                    secureTextEntry={true}
                    onChangeText={(val) => setUserData({ ...userdata, conformpassword: val })}
                />
            </View>
            <View style={{ margin: 30, width: '100%', height: 200, alignItems: 'center' }}>
                <TouchableOpacity style={[styles.btn, { backgroundColor: 'blue' }]}
                    onPress={() => handelSignUp(userdata)}>
                    <Text style={{ color: '#ffff', fontWeight: 'bold', fontSize: 20 }}>Register</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ marginTop: 20 }}
                    onPress={() => navigation.goBack()}>
                    <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Go Back</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    inputText: {
        width: '80%',
        fontSize: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'grey',
        marginTop: 15
    },
    btn: {
        // backgroundColor:'blue',
        marginTop: 20, width: "80%",
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
    }
})
