import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../actions/actionItem";

function TodoForm(props){

    const [text, setText] = useState("");
    const dispatch = useDispatch();

    function handleChange(event){ //this event is the input.
        let t = event.target.value;
        setText(t);
    }

    function onAddItem(event){ //this event is the button.
        event.preventDefault(); //preventDefault() is used to prevent the default action of an element from happening.
        if(text !== ""){
            dispatch(addItem(text));
            setText(""); //setText("") is used to clear the input after the item is added and this just happens when the button is clicked and if the input value is equal to the state(text).
            props.onHideModal();
        }
    }

    return(
        <form>
            <input type="text" placeholder="Add Todo" onChange={handleChange} value={text}/> {/* 'value={text}' because we want to keep the value of the input when we change the state */}
            <button type="submit" onClick={onAddItem}>Add</button>
        </form>
    )
}

export default TodoForm;