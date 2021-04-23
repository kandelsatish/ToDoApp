import React,{useEffect,useState} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import App from '../App'
import GlobalState from './GlobalState'
import AuthenticationStack from '../AuthStack/Authentication/AuthenticationStack'
import AsyncStorage from '@react-native-async-storage/async-storage'
export default function Main() {
  const [userdata,setUserData]=useState({})
  console.log(userdata);
  useEffect(async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('userInfo')
        jsonValue != null ? setUserData(JSON.parse(jsonValue)): null;
    } catch (e) {
        // error reading value
    }
}, [])

  return (
    <GlobalState>
      <NavigationContainer>
        {userdata.isloggredIn? <App/>: <AuthenticationStack/>}
      </NavigationContainer>
     </GlobalState>

  )
}


