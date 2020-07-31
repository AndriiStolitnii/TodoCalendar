import React, {useContext} from 'react'
import Context from '../context'
import { AiFillEdit, AiFillDelete } from "react-icons/ai"
import { IconContext } from "react-icons"

const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginBottom: '.5rem'
    },
    input: {
        marginRight: '1rem'
    }
}

function ToDoItem({todo, i, onChange}) {
    const { removeToDo, startEditToDo } = useContext(Context);
    const classes = [];
    if(todo.completed) {
        classes.push('done');
    }

    return (
        <li style={styles.li}>
            <span className={classes.join(' ')}>
                <input 
                style={styles.input} 
                type="checkbox" 
                checked={todo.completed}
                onChange={()=> onChange(todo.id)}/>
                <strong>{i+1}. </strong>
                <span className='category'>{todo.category}: </span>
                {todo.title}
            </span>
            <IconContext.Provider value={{color: "#006edc"}}>
                <div>
                    <button style={{border: 0}} onClick={()=>startEditToDo(todo)}><AiFillEdit /></button>
                    <button style={{border: 0}} onClick={()=>removeToDo(todo.id)}><AiFillDelete /></button>
                </div>
            </IconContext.Provider>    
        </li>
    )
}

export default ToDoItem;