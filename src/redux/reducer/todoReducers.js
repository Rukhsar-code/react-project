const initialData = {
    list: [],
    users : null
}


const todoReducers =(state = initialData,action) => {
   switch(action.type){
       case "ADD_TODO":
           const {id,data} = action.payload;
           return {
               ...state,
               list : [
                   ...state.list,
                   {
                       id:id,
                     data : data
               }
            ]
           }

           case "DELETE_TODO":
           const newList = state.list.filter ((elem) => elem.id !== action.id) ;           
           return {
                ...state,
              list : newList
            }

          //   case "DELETE_USER":
          //  const newList2 = state.user.filter ((elem) => elem.id !== action.id) ;           
          //  return {
          //       // ...state,
          //     users : newList2
          //   }

          case "REMOVE_TODO":      
           return {
                ...state,
              list : [],
              users : null
            }

            case "LOAD_USERS":      
            return {
                 ...state,
               users : action.payload
             }

           default : return state;
           
   }
}
export default todoReducers;