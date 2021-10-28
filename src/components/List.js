import React from "react";

function List(props){

    function DoneImg(props){ // Define a function to render the done image
        if(props.done){
            return <img alt="on" src="../../assets/on.png"></img>
        } else{
            return <img alt="off" src="../../assets/off.png"></img>
        }
    }

    return(
        <ul>
            {props.itens.map((item)=>{
                return <li className={item.done ? "done" : ""} key={item.id}>{item.text}
                    <button onClick={()=>{props.onDone(item)}}><DoneImg done={item.done}></DoneImg></button>
                    <button onClick={()=>props.onDeleteItem(item)}><img alt="delete" src="../../assets/bin.png"></img></button></li>})}
        </ul> //'{()=>props.onDeleteItem(item)}' is an anonymous function, which takes an item as a parameter and calls the onDeleteItem function passing the item as a parameter to the parent component.
    )
}

export default List;