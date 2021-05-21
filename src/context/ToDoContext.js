import createDataContext from '../context/createDataContext'

const todoReducer = (state, action) => {
    switch (action.type) {
        case 'add_todo':
            return [...state, { id: Math.floor(Math.random() * 99999), title: action.payload.todo }];
        case 'delete_todo':
            return state.filter(item => {
                return item.id != action.payload;
            });
        case 'edit_todo':
            return state.map(item => {
               return item.id===action.payload.id ? action.payload : item;
            })

        default:
            return state;
    }
}


const initialState = [
    { id: 1, title: 'Buy some bear and snacks' },
    { id: 2, title: 'Order drinks cake for birthday' },
]

    const addTodos =(dispatch)=> (id,todo, callback) => {
        dispatch({ type: 'add_todo', payload: {id,todo} });
        if (callback) {
            callback();
        }
    }

    const deleteTodo =(dispatch)=> (id) => {
        dispatch({ type: 'delete_todo', payload: id });
    }

    const editTodo =(dispatch)=> (id, title, callback) => {
        alert(title);
        dispatch({ type: 'edit_todo', payload: { id, title } })
        if (callback) {
            callback();
        }
    }


export const {Context,Provider}=createDataContext(
    todoReducer,
    {addTodos,editTodo,deleteTodo},
    initialState
);
