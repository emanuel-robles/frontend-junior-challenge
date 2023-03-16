import React from "react";
import { useSelector } from "react-redux";
import {  toDoResults } from "../../utils/index";
import {fetchAllTasks} from '../../features/counter/pruebaSlider';

const TodoResults = () => {
  

  const {todos:getTasks} = useSelector(state => state.tasks)
  const donecounter = toDoResults(getTasks)

  return(
    <div>
     DONE: <div>
        {donecounter}
      </div>
    </div>
  ) 

};

export default TodoResults;