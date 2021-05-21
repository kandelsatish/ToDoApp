import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Todos from './src/screens/Todos';
import {Provider} from './src/context/ToDoContext'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Add from './src/screens/Add';
import ShowScreen from './src/screens/ShowScreen';
import Edit from './src/screens/Edit';
const Stack = createStackNavigator();
const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Todos" component={Todos}
          options={({navigation})=>({
            headerRight:()=> <MaterialCommunityIcons name='plus' size={40} onPress={()=>navigation.navigate("New")}/>
          })}
          />
          <Stack.Screen name="New" component={Add}/>
          <Stack.Screen name="ToDo" component={ShowScreen}/>
          <Stack.Screen name="Edit" component={Edit}/>
        </Stack.Navigator>
      </NavigationContainer>
  )
};

export default ()=>{
  return(
    <Provider>
      <App/>
    </Provider>
  )
}
