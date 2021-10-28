import React, {useState, useEffect} from "react";
import "./Todo.css";
import List from "./components/List";
import TodoForm from "./components/TodoForm";
import Item from "./components/Items";

function Todo(){

    const [item, setItem] = useState([]); //array of objects with the values of the input.

    function onAddItem(text){ //this function is called from the TodoForm component with the text value.
        let newItem = new Item(text); //creates a new Item object with the text value.

        setItem([...item, newItem]); //the '...item' is used to spread the array and add the newItem value.
    }

    return(
        <div className="container">
        <h1>Todo</h1>
        <TodoForm onAddItem={onAddItem}/>
        <List item={item}/>
        </div>
    )
}

export default Todo;