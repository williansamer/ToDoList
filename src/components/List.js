import React from "react";
import ListItem from "./ListItem";
import { useSelector } from "react-redux";

function List(){

    const items = useSelector(state=>state);

    return(
        <ul>
            {items.map((item)=>{
                return <ListItem key={item.id} item={item}></ListItem>})}
        </ul> //'{()=>props.onDeleteItem(item)}' is an anonymous function, which takes an item as a parameter and calls the onDeleteItem function passing the item as a parameter to the parent component.
    )
}

export default List;