import React from "react";
import { useSelector } from "react-redux";
import {  toDoResults } from "../../utils/index";
import "./styles.css";
const TodoResults = () => {
  

  const {todos:getTasks} = useSelector(state => state.tasks)
  const donecounter = toDoResults(getTasks)

  return(
    <div  className="todo-results" >
     DONE: <div className="count" >
        {donecounter}
      </div>
    </div>
  ) 

};

export default TodoResults;