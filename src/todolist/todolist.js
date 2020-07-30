import React from 'react'
import ToDoItem from './todoitem'; 

const styles = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0
    }
}

const ToDoList = (props=> {

    console.log(props.todos)

    return (
        <ul style = {styles.ul}>
            {props.todos.filter(todo=>todo.date.getFullYear().toString()+todo.date.getMonth().toString()+todo.date.getDate().toString()===props.date.getFullYear()+props.date.getMonth().toString()+props.date.getDate().toString()).map((todo,i) =>{
                return <ToDoItem todo={todo} key={todo.id} i={i} onChange={props.onToggle} date={props.date}/>
            })}
        </ul>
    )
})

export default ToDoList;