import React from 'react'

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

function EditToDo(props) {

    function submitEdit(event) {
        event.preventDefault() 
        if (props.editingTitle.trim()) {
            props.onEdit(props.editingTitle, props.editingId, props.editingCategory)
        }
    }

    return (
        <form style={styles.form} onSubmit={submitEdit}>
            <select value={props.editingCategory} onChange={event => props.setEditingCategory(event.target.value)}>
                <option value='code'>Code</option>
                <option value='meeting'>Meeting</option>
                <option value='research'>Research</option>
            </select>
            <input style={styles.input} value={props.editingTitle} onChange={event => props.setEditingTitle(event.target.value)}/>
            <button style={styles.button} type="submit">Edit todo</button>
        </form>
    )

}

export default EditToDo