import React from "react";
import { useSelector } from "react-redux";
import {  totalAmount } from "../../utils/index";
import "./styles.css";
const TodoResults = () => {
  

  const {todos:getTasks} = useSelector(state => state.tasks)
  const result = totalAmount(getTasks)

  return(
    <div  className="todo-results" >
     DONE: <div className="count" >
        {result}
      </div>
    </div>
  ) 

};

export default TodoResults;