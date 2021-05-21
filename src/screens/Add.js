import React, { useState, useContext } from 'react'
import TodoForm from '../components/TodoForm';
import {Context} from '../context/ToDoContext'
export default function Add({ navigation }) {
    const { addTodos } = useContext(Context)
    return (
    
        <TodoForm 
        initialValues={{id:'',title:''}}
        onSubmit={(id,title)=>addTodos(id,title,()=>navigation.goBack())}
        />
    )
}

