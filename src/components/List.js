import React from "react";
import ListItem from "./ListItem";

function List(props){

    return(
        <ul>
            {props.itens.map((item)=>{
                return <ListItem key={item.id} item={item} onDone={props.onDone} onDeleteItem={props.onDeleteItem}></ListItem>})}
        </ul> //'{()=>props.onDeleteItem(item)}' is an anonymous function, which takes an item as a parameter and calls the onDeleteItem function passing the item as a parameter to the parent component.
    )
}

export default List;