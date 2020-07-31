import React, { useState } from 'react'

const styles = {
    form: {
        margin: '1rem auto',
        width: '400px',
        boxSizing: 'border-box'
    },
    button: {
        marginLeft: '1rem',
        marginRight: '1 rem',
        float: 'right',
        fontSize: '1rem'
    },
    input: {
        marginLeft: '2rem'
    }
}

function AddToDo(props) {
    const [value, setValue] = useState('')

    const [category, setCategory] = useState('code')

    function submitAdd(event) {
        event.preventDefault() 
        if (value.trim()) {
            props.onCreate(value, props.date, category)
            setValue('')
        }
    }

    return (
        <form style={styles.form} onSubmit={submitAdd}>
            <select value={category} onChange={event => setCategory(event.target.value)}>
                <option value='code'>Code</option>
                <option value='meeting'>Meeting</option>
                <option value='research'>Research</option>
            </select>
            <input style={styles.input} value={value} onChange={event => setValue(event.target.value)}/>
            <button style={styles.button} type="submit">Add todo</button>
        </form>
    )

}

export default AddToDo