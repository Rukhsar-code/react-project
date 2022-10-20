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

// export const deleteUser = (id) => {
//     return {
//         type : 'DELETE_USER',
//         id

//     }
// }

export const removeTodo = () => {
    return {
        type : 'REMOVE_TODO',

    }
}

// export const loadUsers = (users) => {
//    return { 
//        type : 'LOAD_USERS',
//        payload : users
//    }
// }

export const loadUsers = () => {
    return async function(dispatch) {
        const comments = await axios.get('https://jsonplaceholder.typicode.com/users');
        console.log("comments @@@@@@@@@@@@@@@@@@@@",comments.data)
        dispatch({
            type: 'LOAD_USERS',
            payload: comments
        });
    };
}