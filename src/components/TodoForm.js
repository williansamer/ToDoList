import React, {useState} from "react";

function TodoForm(props){

    const [text, setText] = useState("");

    function handleChange(event){ //this event is the input.
        let t = event.target.value;
        setText(t);
    }

    function addItem(event){ //this event is the button.
        event.preventDefault(); //preventDefault() is used to prevent the default action of an element from happening.
        if(text !== ""){
            props.onAddItem(text); //Sending the 'text' to the onAddItem function to the Father component.
            setText(""); //setText("") is used to clear the input after the item is added and this just happens when the button is clicked and if the input value is equal to the state(text).
        }
    }

    return(
        <form>
            <input type="text" placeholder="Add Todo" onChange={handleChange} value={text}/> {/* 'value={text}' because we want to keep the value of the input when we change the state */}
            <button type="submit" onClick={addItem}>Add</button>
        </form>
    )
}

export default TodoForm;