import React, { useState, useContext, useEffect } from 'react'
import { View, Text, StyleSheet, TextInput, StatusBar, Touchable, TouchableOpacity, Keyboard, Alert } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Contx } from '../../components/GlobalState'
export default function LandingScreen({ navigation }) {
    const [userdata, setUserData] = useState({});
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const storeData = async (value) => {
        try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem('userInfo', jsonValue)
            // Alert.alert('Success',
            // 'Registered Successfully',
            // [
            //     {
            //         text: 'Ok',
            //         onPress: ()=>{
            //             // navigation.goBack()
            //             // setIsRegistered(true);
                        
            //         }
            //     },
            // ],
            // { cancelable: false });
        } catch (e) {
            console.log(e);
        }
    }


    useEffect(async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('userInfo')
            jsonValue != null ? setUserData(JSON.parse(jsonValue)) : null;
        } catch (e) {
            // error reading value
        }
    }, [userdata])

      const handelLogIn=(email,password)=>{
          if(userdata.email==email && userdata.password==password){
              userdata.isloggredIn=true;
              storeData(userdata);
              navigation.replace("Home")
          }
          else(alert("Invalid Credentials"))
      }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'#fff'} />
            <View style={{ height: 200, width: '100%', alignItems: 'center', justifyContent: 'center', marginTop: 100 }}>
                <TextInput placeholder="Email" style={styles.inputText}
                    onChangeText={(val) => setEmail(val)}
                />
                <TextInput placeholder="Password" style={styles.inputText}
                    secureTextEntry={true}
                    onChangeText={(val) => setPassword(val)}
                />
            </View>
            <View style={{ margin: 30, width: '100%', height: 200, alignItems: 'center' }}>
                <TouchableOpacity style={[styles.btn, { backgroundColor: 'blue' }]}
                    onPress={() => handelLogIn(email,password)}>
                    <Text style={{ color: '#ffff', fontWeight: 'bold', fontSize: 20 }}>LOG IN</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btn, { borderColor: 'grey' }]}
                    onPress={() => navigation.navigate("Register")}>
                    <Text style={{ fontWeight: 'bold', fontSize: 15 }}>SIGN UP</Text>
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
