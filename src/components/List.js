import React from "react";

function List(props){
    return(
        <ul>
            {props.item.map((item)=>{return <li key={item.id}>{item.text}</li>})}
        </ul>
    )
}

export default List;