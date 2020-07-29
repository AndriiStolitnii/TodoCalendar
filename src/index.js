import React, { useState } from "react";
import { render } from "react-dom";
import 'react-calendar/dist/Calendar.css';
import Calendar from "react-calendar";
import ToDoList from "./todolist/todolist";
import './index.css'
import Context from "./context";
import AddToDo from './todolist/addtodo'

const ReactCalendar = () => {
  const [date, setDate] = useState(new Date());

  const [todos, setTodos] = useState([])

  const onChange = date => {
    setDate(date);
  };

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

  function addToDo(title) {
    setTodos(todos.concat([{
      title,
      id: Date.now(),
      completed: false
    }]))
  }

  return (
    <Context.Provider value={{removeToDo}}>
      <div>
        <Calendar onChange={onChange} value={date} />
        <ToDoList todos={todos} onToggle={toggleToDo}/>
        <AddToDo onCreate={addToDo}/>
      </div>
    </Context.Provider>
  );
};

render(<ReactCalendar />, document.querySelector("#root"));