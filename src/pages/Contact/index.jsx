import ToDo from "../../components/ToDo/ToDo"
import ToDoForm from "../../components/toDoForm/ToDoForm"
import "./Contact.css"
import React, {useState} from "react"

export default function Contact() {
    const [todos, setTodos] = useState([])

    const addTask = (userInput) => {
        if (userInput) {
            const newItem = {
                id: Math.random().toString(36).substr(2,9),
                task: userInput
            }
            setTodos([...todos, newItem])
            console.log(newItem);
            }
    }
console.log(todos);

    const removeTask = (id) =>{
        setTodos([...todos.filter((todo) => todo.id !== id)])
    }

    return( 
            <div className="container">
                <ToDoForm addTask={addTask}/>
                {todos.map((todo) => {
                    return (
                        <ToDo
                            todo={todo}
                            key={todo.id}
                            removeTask={removeTask}                        
                        />
                    )
                })}

            </div>
    )
}


