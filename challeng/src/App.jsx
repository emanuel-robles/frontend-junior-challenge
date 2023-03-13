
import TodoList from "./components/TodoList";
import TodoResults from "./components/TodoResults";
import NavBar from "./components/NavBar";
import "./App.css";
import AddTask from "components/AddTask";

const App = () => {
  return (
    <div className="root">
      <NavBar/>
      <TodoList />
      <TodoResults />
      <AddTask/>
    </div>
  );
};

export default App;
