import React, {useState, useEffect} from "react";
import "./Todo.css";
import List from "./components/List";
import TodoForm from "./components/TodoForm";
import Item from "./components/Items";

function Todo(){

    const [itens, setItens] = useState([]); //array of objects with the values of the input.

    function onAddItem(text){ //this function is called from the TodoForm component with the text value.
        let newItem = new Item(text); //creates a new Item object with the text value.

        setItens([...itens, newItem]); //the '...item' is used to spread the array and add the newItem value.
    }

    function onDeleteItem(item){
        let delItem = itens.filter((it) => it.id !== item.id); //filters the array and returns the item that is not the same as the item that is being deleted.
    
        setItens(delItem); //sets the new array.
    }

    function onDone(check){
        let doneItem = itens.map((it)=>{
            if(it.id === check.id){
                it.done = !it.done; //changes the done value of the item.
            }
            return it;
        })

        setItens(doneItem); //sets the new array.
    }

    return(
        <div className="container">
        <h1>Todo</h1>
        <TodoForm onAddItem={onAddItem}/> {/* '{onAddItem}' is passed to the List component as a prop. From son to parent. */}
        <List onDone={onDone} onDeleteItem={onDeleteItem} itens={itens}/> {/* '{onDeleteItem}' is passed to the List component as a prop. From son to parent. */}
        </div>
    )
}

export default Todo;