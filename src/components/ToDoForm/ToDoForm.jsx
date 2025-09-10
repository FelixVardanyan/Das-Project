import { useState } from "react";
import "./ToDoForm.css"

function ToDoForm({addTask}){
    const [userInput, setUserInput] = useState('')

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(userInput)
        setUserInput("")
    }
    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
                handleSubmit(e)
        }
    }
    return (
        <form onSubmit={handleSubmit} className="input-area">
                <input
                value={userInput}
                type="text"
                onChange={handleChange}
                onKeyDown={handleKeyPress}
                placeholder="Enter task"    
                className="input"
                />
                <button className="add-btn">Add</button>
        </form>
    )
}
export default ToDoForm
