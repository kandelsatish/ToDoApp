import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Home from './Home';
import Edit from './Edit';
import Todo from './Todo';

const Stack=createStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Home" component={Home}/>
            {/* <Stack.Screen name="Todo" component={Todo}/> */}
            <Stack.Screen name="Edit" component={Edit}/>
        </Stack.Navigator>
    )
}

