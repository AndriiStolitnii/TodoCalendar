import React, { useState} from "react";
import { render } from "react-dom";
import ReactCalendar from "./calendar/calendar";
import ToDoList from "./todolist/todolist";
import './index.css'
import Context from "./context";
import AddToDo from './todolist/addtodo';

const ToDo = () => {
  
  const [todos, setTodos] = useState([]);

  const [date, setDate] = useState(new Date());

  const updateDate = (date) => {
    setDate(date);
  }

  const renderTodos = () => {
    ToDoList(todos, toggleToDo, date);
  }

  function addToDo(title, date) {
    setTodos(todos.concat([{
      title,
      date,
      id: todos.length + 1,
      completed: false
    }]))
  }

  function toggleToDo(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    )
  }

  function removeToDo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <Context.Provider value={{removeToDo}}>
      <div>
        <ReactCalendar updateDate={updateDate} renderTodos={renderTodos}/>
        <ToDoList todos={todos} onToggle={toggleToDo} date={date}/>
        <AddToDo onCreate={addToDo} date={date}/>
      </div>
    </Context.Provider>
  );
};

render(<ToDo />, document.querySelector("#root"))