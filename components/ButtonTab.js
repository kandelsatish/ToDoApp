import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Add from './Add';
import Home from './Home';
import Profile from './Profile';
import AddStack from './AddStack';
import ProfileStack from './ProfileStack';
import HomeStack from './HomeStack';

const Tab = createMaterialBottomTabNavigator();
export default function ButtonTab() {
    return (
        <Tab.Navigator
            initialRouteName="HomeStack"
            activeColor="blue"
            barStyle={{ backgroundColor: '#ffff',height:70}}
        >
            <Tab.Screen
                name="HomeStack"
                component={HomeStack}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={30} />
                    ),
                }}
            />
            <Tab.Screen
                name="AddStack"
                component={AddStack}
                options={{
                    tabBarLabel: 'Add',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="plus" color={color} size={30} />
                    ),
                }}
            />
            <Tab.Screen
                name="ProfileStack"
                component={ProfileStack}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account" color={color} size={30} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}
