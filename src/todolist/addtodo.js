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

    const [category, setCategory] = useState('code')

    function submitAdd(event) {
        event.preventDefault() 
        if (value.trim()) {
            props.onCreate(value, props.date, category)
            setValue('')
        }
    }

    function submitEdit(event) {
        event.preventDefault() 
        if (props.editingTitle.trim()) {
            props.onEdit(props.editingTitle, props.editingId, props.editingCategory)
            setValue('')
            setCategory('code')
        }
    }

    if (!props.editing) {
        return (
            <form style={styles.form} onSubmit={submitAdd}>
                <select value={category} onChange={event => setCategory(event.target.value)}>
                    <option value='code'>Code</option>
                    <option value='meeting'>Meeting</option>
                    <option value='research'>Research</option>
                </select>
                <input value={value} onChange={event => setValue(event.target.value)}/>
                <button style={styles.button} type="submit">Add todo</button>
            </form>
        )
    } else {
        return (
            <form style={styles.form} onSubmit={submitEdit}>
                <select value={props.editingCategory} onChange={event => props.setEditingCategory(event.target.value)}>
                    <option value='code'>Code</option>
                    <option value='meeting'>Meeting</option>
                    <option value='research'>Research</option>
                </select>
                <input value={props.editingTitle} onChange={event => props.setEditingTitle(event.target.value)}/>
                <button style={styles.button} type="submit">Edit todo</button>
            </form>
        )
    }

}

export default AddToDo