import axios from 'axios';

export const addTodo = (data) => {
    return {
        type : 'ADD_TODO',
        payload: {
            id: new Date().getTime().toString(),
            data : data
        }
    }
}
export const deleteTodo = (id) => {
    return {
        type : 'DELETE_TODO',
        id
    }
}
export const removeTodo = () => {
    return {
        type : 'REMOVE_TODO',

    }
}
export const loadUsers = () => {
    return async function(dispatch) {
        const result = await axios.get('https://jsonplaceholder.typicode.com/users');
        dispatch({
            type: 'LOAD_USERS',
            payload: result
        });
    };
}