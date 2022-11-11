import React from 'react'
import { useState } from 'react'
import "./form.css"

function Form() {
    const [forms, setForms] = useState("");
    const [todos, setTodos] = useState([]);
    //console.log(todos)
    const handlesubmit = (e) => {
        e.preventDefault();
    
       setTodos([{forms}, ...todos]) 
       setForms("");
    }

    return (
        <div className=' form'>
            <form onSubmit={handlesubmit}>
                <input className='input'
                    placeholder='todo'
                    type="text"
                    onChange={(e) => setForms(e.target.value)}
                    value={forms}
                    
                />

                <button className='button' type='submit'> add</button>

            </form>
            <ul>
                {
                    todos.map((t) => (
                        <li className='list'>
                            <span> {t.forms} </span>
                            <button> edit</button>
                            <button> delet</button>
                        </li>
                    ))
                }
            </ul>
        </div>

    )
}

export default Form