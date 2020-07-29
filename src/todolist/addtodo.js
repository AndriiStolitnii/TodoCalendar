import React, { useState } from 'react'

const styles = {
    form: {
        marginTop: '1rem'
    },
    button: {
        marginLeft: '1rem',
        fontSize: '1rem'
    }
}

function AddToDo({onCreate}) {
    const [value, setValue] = useState('')

    function submitHandler(event) {
        event.preventDefault() 
        if (value.trim()) {
            onCreate(value)
            setValue('')
        }
    }

    return (
        <form style={styles.form} onSubmit={submitHandler}>
            <input value={value} onChange={event => setValue(event.target.value)}/>
            <button style={styles.button} type="submit">Add todo</button>
        </form>
    )
}

export default AddToDo