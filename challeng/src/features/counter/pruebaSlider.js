import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from'uuid';
import axios from "axios";

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
    
          text: actions.payload,
          done: false, 
       
        };
        state.todos.push(newTask); 
      },
      //no funciona    
      toggleTask: (state, action) => {
        // Buscamos el index de la tarea a marcar como completada / no completada.
        const taskIndex = state.todos.findIndex(
          (task) => task.id === action.payload.id
        );
        // Si la tarea existe, cambiamos el estado de su propiedad done.
        if (taskIndex >= 0) {
          state[taskIndex].done = !state[taskIndex].done;
        }},
        deletetask:(state, actions)=>{
          // const taskIndex = state.todos.filter(
          //       (task) => task.id === action.payload.id
          //     );
          // return state.todos.splice(taskIndex,1)
      
          state.todos = state.todos.filter(   (todo) => todo.id != actions.payload)
   
        },
 
    searchId:(state,actions)=>{
      state.todos = actions.payload
    },
    incremented: state => {
      state.value += 1
    },
    decremented: state => {
      state.value -= 1
    },

  },
});

export const {
  setTasksList,incremented,decremented,addtask,deletetask,toggleTask

} = tasksSlice.actions;

export default tasksSlice.reducer;

export const fetchAllTasks = ()=> (dispatch)=>{
  
  axios.get("https://my-json-server.typicode.com/AlvaroArratia/static-todos-api/todos")
.then((response)=>{
dispatch(setTasksList(response.data))


})
.catch(()=>{})
}

export const deletedTa = (id) => {
  return async (dispatch) => {
    dispatch(deletetask(id));

};}


