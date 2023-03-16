
import TodoList from "./components/TodoList";
import TodoResults from "./components/TodoResults";
import { useDispatch } from "react-redux";
import React,{useEffect} from "react";
import "./App.css";
import AddTask from "components/AddTask";
import { ToastContainer } from "react-toastify";
import {fetchAllTasks} from '../src/features/counter/pruebaSlider';

const App = () => {
  const dispatch = useDispatch()

useEffect(() => {
  dispatch(fetchAllTasks())  
}, [dispatch])

  return (
    <div className="root">
      <TodoList />
      <TodoResults />
      <AddTask/>
      <ToastContainer autoClose={2000} />
    </div>
  );
};

export default App;
