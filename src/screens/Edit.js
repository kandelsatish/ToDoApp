import React,{useState,useContext} from 'react'
import TodoForm from '../components/TodoForm';
import {Context} from '../context/ToDoContext'
export default function Edit({route,navigation}) {
    const {editTodo}=useContext(Context);
    const {item}=route.params;    
    return (
        <TodoForm
        initialValues={item}
        onSubmit={(id,title)=>editTodo(id,title,()=>navigation.goBack())}
        />
    )
}


