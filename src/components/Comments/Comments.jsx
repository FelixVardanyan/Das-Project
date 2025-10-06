import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Comments.css"
import { commentCreate } from "../../redux/about/actions";
import uniqid from 'uniqid'
import SingleComment from "../SingleComments/SingleComments";



function Comments(){
    const [textComment, setTextComment] = useState('')
    const comments = useSelector(state=> {
        const {comments} = state;
        return comments.comments
    });

    const dispatch = useDispatch()


    const hendleInput = (e) => {
        setTextComment(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const id = uniqid()
        dispatch(commentCreate(textComment, id));
        setTextComment(e.target.value="")
    }

    return(
        <div className="card-comments">
            <form onSubmit={handleSubmit} className="comment-item-create">
                <input type="text" className="card-input" value={textComment} onChange={hendleInput}/>
                <input type="submit" hidden/>
            </form>
            {!!comments?.length && comments.map(res=>{
                return <SingleComment key={res.id} data={res}/>
            })}
        </div>
    )
}
export default Comments