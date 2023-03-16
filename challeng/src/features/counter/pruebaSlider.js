import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from'uuid';
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  todos: [],
  newtodo:{},
  value: 0

};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
       //funciona:
       setTasksList: (state,actions)=>{
        state.todos = actions.payload;
      },
      addtask: (state,actions)=>{
        const newTask = {
          id:uuidv4(),
          label: actions.payload,
          checked: true, 
        };
        state.todos.push(newTask); 
      },
  
        deletetask:(state, actions)=>{
          state.todos = state.todos.filter(   (todo) => todo.id != actions.payload)
   
        },
        toggleChecks:(state, actions)=>{
        const index = state.todos.findIndex( e => e.id == actions.payload)
        state.todos[index].checked = !state.todos[index].checked 
        },
 
  },
});

export const {
  setTasksList,addtask,deletetask,toggleChecks

} = tasksSlice.actions;

export default tasksSlice.reducer;

export const fetchAllTasks = ()=> (dispatch)=>{
  
  axios.get("https://my-json-server.typicode.com/AlvaroArratia/static-todos-api/todos")
.then((response)=>{
dispatch(setTasksList(response.data))


})
.catch(()=>{})
}
export const checkATask = (id) => {
  return async function (dispatch) {
      try {
          dispatch(toggleChecks(id))
          
      } catch (error) {
          toast.warn(error.message);
      }
  }
}

//https://www.neoguias.com/como-reemplazar-elemento-array-javascript/