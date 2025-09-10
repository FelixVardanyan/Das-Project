import "./ToDo.css"
import { FaRegTrashCan } from "react-icons/fa6";

function ToDo({ todo, toggleTask, removeTask }) {
    return (
        <div className="task">
            <span>{todo.task}</span>
            <button onClick={() => removeTask(todo.id)} className="delete-btn"><FaRegTrashCan />
            </button>
        </div>
    )
}
export default ToDo