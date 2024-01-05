import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddTodo from './Components/AddTodo/AddTodo';
import TodoList from './Components/TodoList/TodoList';

function App() {
  return (
    <div className="App">
      <h3 > Welcome NEXT EGY !!</h3>

      <AddTodo />

      <TodoList />

      <div>

      </div>
    </div>
  );
}

export default App;
