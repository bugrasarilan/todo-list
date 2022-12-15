import React from 'react'
import { useState } from 'react'
import "./form.css"

function Form() {
    const [forms, setForms] = useState("");
    const [todos, setTodos] = useState([]);
    const [edite, setEdite] = useState();

    const handlesubmit = (e) => {
        e.preventDefault();

        if (edite) {
            const editforms = todos.find((i) => i.id === edite);
            const newtodos = todos.map((t) => t.id === editforms.id ? (t = { id: t.id, forms }) : { id: t.id, forms: t.forms })
            setTodos(newtodos);
            setEdite(0);
            setForms("")
            return;
        }
        if (forms !== "")
            setTodos([{ id: `${forms}-${Date.now()}`, forms }, ...todos])
        setForms("");
    }

    const delet = (id) => {
        const delforms = todos.filter((to) => to.id !== id)
        setTodos([...delforms])
    }
    const edit = (id) => {
        const editforms = todos.find((i) => i.id === id)
        setForms(editforms.forms)
        setEdite(id);
    };

    return (
        <div className='Full ' >
            <div className='container'>
                <h1> Todo-List</h1>
                <form className='Forms' onSubmit={handlesubmit}>
                    <input
                        placeholder='todo'
                        type="text"
                        onChange={(e) => setForms(e.target.value)}
                        value={forms}

                    />

                    <button className='button' type='submit' >  {edite ? "edit" : "add"} </button>


                </form>
                <ul className='all'>
                    {todos.map((t) => (
                        <li className='li'>
                            <div className='formstext' key={t.id}> {t.forms}   </div>
                            <button className='button' onClick={() => edit(t.id)} > edit</button>
                            <button className='button' onClick={() => delet(t.id)} > delete</button>
                            {/* <input type="checkbox"></input>  */} 

                        </li>
                    ))}

                </ul>
            </div>
        </div>

    )
}

export default Form