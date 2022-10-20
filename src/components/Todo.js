import React, { useState ,useEffect} from 'react';
import './todo.css';
import {useDispatch,useSelector} from 'react-redux';
import  {addTodo,deleteTodo,loadUsers,removeTodo,} from '../redux/actions/index';
// import { loadUsersFromServer } from '../redux/reducer/usersThunk';


const Todo = () => {
    const [inputData,setInputData] = useState('');
    const dispatch = useDispatch();
    const list = useSelector((state)=> state.todoReducers.list);
    const {users} = useSelector((state)=> state.todoReducers);

    console.log(" users@@@@@@@@@@@", users);
     
     useEffect(()=> {
       dispatch(loadUsers())
     },[]);

    return (
        <div className = 'main_div'>
      <div className = 'child_div'>

      
       <h1 style = {{color: 'white'}}>Add Your Item Here</h1>
      
     

      <div className = 'add_items'>
       <input className= 'input'
        type = 'text' 
       placeholder = 'Add Items..' 
       value = {inputData} 
       onChange = {(event)=>setInputData(event.target.value) }/>
       <i className="fa fa-plus add-btn" onClick = {() => dispatch(addTodo(inputData), setInputData('')) }></i>
    
     </div>


     <div className = 'show_items'>
       {
        users && users.data.map((user) => {
           return(
          <div className = 'each_item' key = {user.id}>
          <h3>{user.name}</h3>
          {/* <div className = 'todo_btn'>
          <i className = 'fa fa-trash-o fa-lg' title= 'Delete Item' onClick = {()=> dispatch(deleteUser(user.id))}/>
          </div> */}
         </div>
           )
         })
       }
     </div> 



     <div className = 'show_items'>
       {
         list.map((element) => {
           return(
          <div className = 'each_item' key = {element.id}>
          <h3>{element.data}</h3>
          <div className = 'todo_btn'>
          <i className = 'fa fa-trash-o fa-lg' title= 'Delete Item' onClick = {()=> dispatch(deleteTodo(element.id))}/>
          </div>
        </div>
           )
         })
       }
    
     </div>

     <div className = 'show_items'>
       <button className = 'remove_btn' data-sm-link-text = 'remove All' onClick = {()=> dispatch(removeTodo())}> 
        REMOVE ALL
       </button>

     </div>

     </div>
    </div>
    )
}

export default Todo;