import React from 'react'
import { useState } from 'react'
import "./form.css"

function Form() {
    const [forms, setForms] = useState("");
    const [todos, setTodos] = useState([]);
    //console.log(todos)
    const handlesubmit = (e) => {
        e.preventDefault();

        setTodos([{ forms }, ...todos])
        setForms("");
    }

    return (
        <div className=' form' >
            <form onSubmit={handlesubmit}>
                <div className='buttoninput'> <input className='input'
                    placeholder='todo'
                    type="text"
                    onChange={(e) => setForms(e.target.value)}
                    value={forms}

                />

                    <button className='button' type='submit'> add</button>
                </div>

            </form>
            <ul>
                {
                    todos.map((t) => (
                        <li className='list'>
                            <span> {t.forms} </span>
                            <button> edit</button>
                            <button> delete</button>
                        </li>
                    ))
                }
            </ul>
        </div>

    )
}

export default Form