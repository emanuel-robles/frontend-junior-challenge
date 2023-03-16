import React,{useEffect} from "react";
import "./styles.css";
//redux
import {fetchAllTasks,deletetask,checkATask} from '../../features/counter/pruebaSlider';

import { useDispatch,useSelector } from "react-redux";
import TodoListItem from "components/TodoListItem";


const TodoList = () => {
  const dispatch = useDispatch()
  const handleDelete = (id) => {
    // Fix an ability to delete task
    
 dispatch(deletetask(id))
  };

  const toggleCheck = (todoID) => {
    // Fix an ability to toggle task 
    //cada vez que check este en tru activa on chek
   dispatch(checkATask(todoID))

  };
  const {todos:getTasks} = useSelector(state => state.tasks)
  useEffect (()=>{
    dispatch(fetchAllTasks())
  },[])
  return (
   
   <div className="todo-list">
      <style type="text/css">
   {
    
   }
      </style>
      <span className="todo-list-title">Things to do:</span>
      <div className="todo-list-content">
      <div>
    
     
    { getTasks &&  getTasks.map((ele,index) => {
                   return (
                     <TodoListItem
                       key={index}
                       id={ele.id}
                       label={ele.label}
                       checked={ele.checked}
                       onDelete= {() => handleDelete(ele.id) }
                       
                       onCheck={toggleCheck}
                     />
                   );
                 })}

    </div>
      </div>

    </div>
  );
};

export default TodoList;
