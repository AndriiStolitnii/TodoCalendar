import React, { useState} from "react";
import ReactCalendar from "./calendar/calendar";
import ToDoList from "./todolist/todolist";
import './index.css'
import Context from "./context";
import AddToDo from './todolist/addtodo';
import Loader from './loader'
import EditToDo from "./todolist/editToDo";

const App = () => {
  
  const [todos, setTodos] = useState([]);

  const [date, setDate] = useState(new Date());

  const [editing, setEditing] = useState(false)

  const [editingId, setEditingId] = useState(0);

  const [editingTitle, setEditingTitle] = useState('');

  const [editingCategory, setEditingCategory] = useState('')

  const [loading, setLoading] = useState(false)

  const updateDate = (date) => {
    setDate(date);
  }

  function addToDo(title, date, category) {
    setTodos(todos.concat([{
      title,
      date,
      category,
      id: (todos.length > 0) ? Math.max(...todos.map(todo=>todo.id)) + 1 : 1,
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

  function startEditToDo(todo) {
    setEditing(true)
    setEditingId(todo.id)
    setEditingTitle(todo.title)
    setEditingCategory(todo.category)
  }

  function editToDo(title, id, category) {
    setTodos(todos.map(todo=> {
      if(todo.id===id) {
        todo.title = title
        todo.category = category
      }
      return todo 
    }))
    setEditing(false);
  }

  return (
    <Context.Provider value={{removeToDo, startEditToDo}}>
      <div className='wrapper'>
        <ReactCalendar updateDate={updateDate} setLoading={setLoading}/>
        {loading ? <Loader /> : <ToDoList todos={todos} onToggle={toggleToDo} date={date}/>}
        {editing ? <EditToDo onEdit={editToDo} editingId={editingId} editingTitle={editingTitle} setEditingTitle={setEditingTitle} editingCategory={editingCategory} setEditingCategory={setEditingCategory}/> : <AddToDo onCreate={addToDo} date={date} />}     
      </div>
    </Context.Provider>
  );
};

export default App;