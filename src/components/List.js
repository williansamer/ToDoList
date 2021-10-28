import React from "react";

function List(props){
    return(
        <ul>
            {props.item.map((item, index)=>{return <li key={index}>{item}</li>})}
        </ul>
    )
}

export default List;