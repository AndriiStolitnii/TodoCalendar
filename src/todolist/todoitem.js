import React, {useContext} from 'react'
import Context from '../context'

const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginBottom: '.5rem'
    },
    input: {
        marginRight: '1rem'
    }
}

function ToDoItem({todo, i, onChange, date}) {
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

            <button onClick={()=>startEditToDo(todo)}>&#xf044;</button>
            <button onClick={()=>removeToDo(todo.id)}>&times;</button>
        </li>
    )
}

export default ToDoItem;