import "./App.css";
import AddTodo from "./Components/AddTodo/AddTodo";
import TodoList from "./Components/TodoList/TodoList";
import { ColumnsProvider } from "./hooks/useTodoColumns";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="App">
      <ToastContainer />
      <ColumnsProvider>
        <AddTodo />
        <TodoList />
      </ColumnsProvider>

      <div></div>
    </div>
  );
}

export default App;
