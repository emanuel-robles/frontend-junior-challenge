import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import {  setTasksList,incremented,decremented,addtask,deletetask} from '../features/counter/pruebaSlider';
export const fetchAllTasks = ()=> (dispatch)=>{
  axios.get("https://my-json-server.typicode.com/AlvaroArratia/static-todos-api/todos")
.then((response)=>{
dispatch(setTasksList(response.data))


})
.catch(()=>{})
}

export const deletedTa = (id) => (dispatch)=>{
dispatch(deletetask(id));
}


