import React,{useState,useEffect} from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import LandingScreen from './LandingScreen';
import Register from './Register';
import ButtonTab from '../../components/ButtonTab';

const Stack=createStackNavigator();

export default function AuthenticationStack() {
    return (
      <Stack.Navigator headerMode="none">
          <Stack.Screen name="LandingScreen" component={LandingScreen} options={{header:{visible:false}}}/>
          <Stack.Screen name="Register" component={Register}/>
          <Stack.Screen name="Home" component={ButtonTab}/>
      </Stack.Navigator>
    )
}
