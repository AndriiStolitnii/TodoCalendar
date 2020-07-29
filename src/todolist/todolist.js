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
    console.log(props.date)

    return (
        <ul style = {styles.ul}>
            {props.todos.filter(todo=>todo.date===props.date).map((todo,i) =>{
                return <ToDoItem todo={todo} key={todo.id} i={i} onChange={props.onToggle} date={props.date}/>
            })}
        </ul>
    )
})

export default ToDoList;