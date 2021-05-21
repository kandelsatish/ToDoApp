import React, { useContext } from 'react'
import { View, FlatList, TouchableOpacity, Text,StyleSheet } from 'react-native'
import Todo from '../components/Todo';
import { Context } from '../context/ToDoContext'
export default function Todos({ navigation }) {
    const { state } = useContext(Context);
    return (
        <View>
            {state.length
                ? <FlatList
                    data={state}
                    keyExtractor={(todo) => todo.title}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity onPress={() => navigation.navigate('ToDo', { item })}>
                                <Todo item={item} navigation={navigation} />
                            </TouchableOpacity>
                        )
                    }}
                />
                : <View style={styles.emptyMessage}>
                    <Text>Nothing To show. Click '+' to add new</Text>
                </View>
                }

        </View>
    )
}

const styles=StyleSheet.create({
    emptyMessage:{
        alignSelf:'center',
        marginTop:200,
        borderWidth:3,
        borderColor:'grey',
        padding:20,
        borderRadius:10
    }
})

