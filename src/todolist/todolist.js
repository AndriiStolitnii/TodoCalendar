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
            {props.todos.map((todo,i) =>{
                return <ToDoItem todo={todo} key={todo.id} i={i} onChange={props.onToggle}/>
            })}
        </ul>
    )
})

export default ToDoList;