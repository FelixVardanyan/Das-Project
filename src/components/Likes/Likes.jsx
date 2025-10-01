import { connect } from "react-redux";
import "./Likes.css"
import { incrementLikes, decrementLikes } from "../../redux/about/actions";


function Likes(props) {
    console.log("render>", props);
    return (
        <div className="button-controls">
            <button onClick={props.onIncrementLikes}>👍{props.likes}</button>
            <button disabled={props.likes === 0} onClick={props.onDecrementLikes}>👎</button>
        </div>
    )
}

function mapStateProps(state) {
    const { likes } = state
    return {
        likes: likes.likes
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onIncrementLikes: () => dispatch(incrementLikes()),
        onDecrementLikes: () => dispatch(decrementLikes())
    }
}

export default connect(mapStateProps, mapDispatchToProps)(Likes); 