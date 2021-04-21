import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Add from './Add';

const Stack=createStackNavigator();

export default function AddStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Add" component={Add} options={{
          title: 'Add',
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
