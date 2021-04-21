import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Profile from './Profile';

const Stack=createStackNavigator();

export default function ProfileStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Profile" component={Profile} options={{
          title: 'Profile',
          headerStyle: {
            backgroundColor: '#1a355b',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign:'center'
        }}/>
        </Stack.Navigator>
    )
}
