import React from "react";

function List(props){
    return(
        <ul>
            {props.itens.map((item)=>{
                return <li key={item.id}>{item.text}
                        <button onClick={()=>props.onDeleteItem(item)}><img alt="delete" src="../../assets/bin.png"></img></button></li>})}
        </ul> //'{()=>props.onDeleteItem(item)}' is an anonymous function, which takes an item as a parameter and calls the onDeleteItem function passing the item as a parameter to the parent component.
    )
}

export default List;