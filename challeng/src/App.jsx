
import TodoList from "./components/TodoList";
import TodoResults from "./components/TodoResults";
import { useDispatch } from "react-redux";
import React,{useEffect} from "react";
import "./App.css";
import TodoForm from "components/TodoForm";
import { ToastContainer } from "react-toastify";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom"
import {fetchAllTasks} from '../src/features/counter/pruebaSlider';

const App = () => {
  const dispatch = useDispatch()

useEffect(() => {
  dispatch(fetchAllTasks())  
}, [dispatch])

  return (
    <div className="root">
      <Router>
        <div>
          <Link to='/' >Home</Link>
        </div>
        <Switch>
          <Route path='/'>
            
      <TodoList />
      <TodoResults />
      <TodoForm/>
      <ToastContainer autoClose={2000} />


          </Route>
        </Switch>
      </Router>
      
      
      
      
      
    </div>
  );
};

export default App;
