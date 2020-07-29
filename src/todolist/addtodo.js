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

function AddToDo(props) {
    const [value, setValue] = useState('')

    function submitHandler(event) {
        event.preventDefault() 
        if (value.trim()) {
            props.onCreate(value, props.date)
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