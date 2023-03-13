import React,{useEffect} from "react";
import "./styles.css";
//redux
import {fetchAllTasks,deletetask} from '../../features/counter/pruebaSlider';
import { useDispatch,useSelector } from "react-redux";


const TodoList = () => {
  const dispatch = useDispatch()
  const handleDelete = (id) => {
    // Fix an ability to delete task
    
 dispatch(deletetask(id))
  };

  const toggleCheck = (todoId, isChecked) => {
    // Fix an ability to toggle task

  };
  const {todos:getTasks} = useSelector(state => state.tasks)
  const users = []
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
        {/* Fix an ability to render todos */}
      </div>
      <div className="no-todos">
        Looks like you&apos;re absolutely free today!
      </div>
<div className="raw" >
{getTasks.map((element)=>

<div key={element.id} >
  <p className="raw-id" >  {element.label} </p>

  <p  > Task Completed
    <input type="checkbox"  />
     </p>
     <div>
     </div>
     <p>
      <button className="gatito" type="button" onClick={() => handleDelete(element.id)}>DELETE</button>
     </p>

  </div>

)}




</div>

    </div>
  );
};

export default TodoList;
