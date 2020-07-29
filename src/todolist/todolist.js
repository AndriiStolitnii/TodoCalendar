import React from 'react';
import PropTypes from 'prop-types';
import ToDoItem from './todoitem'; 

const styles = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0
    }
}

function ToDoList(props) {
    return (
        <ul style = {styles.ul}>
            {props.todos.map((todo,i) =>{
                return <ToDoItem todo={todo} key={todo.id} i={i} onChange={props.onToggle}/>
            })}
        </ul>
    )
}

ToDoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired 
}

export default ToDoList;