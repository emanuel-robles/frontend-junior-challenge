
import TodoList from "./components/TodoList";
import TodoResults from "./components/TodoResults";
import "./App.css";
import AddTask from "components/AddTask";

const App = () => {
  return (
    <div className="root">
      <TodoList />
      <TodoResults />
      <AddTask/>
    </div>
  );
};

export default App;
