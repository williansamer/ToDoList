import React from "react";
import Card from "./Cards";

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
                return <li key={item.id}>
                    <Card className={item.done ? "done item" : "item"} >
                        {item.text}
                        <div>
                            <button onClick={()=>{props.onDone(item)}}><DoneImg done={item.done}></DoneImg></button>
                            <button onClick={()=>props.onDeleteItem(item)}><img alt="delete" src="../../assets/bin.png"></img></button>
                        </div>
                    </Card>
                    </li>})}
        </ul> //'{()=>props.onDeleteItem(item)}' is an anonymous function, which takes an item as a parameter and calls the onDeleteItem function passing the item as a parameter to the parent component.
    )
}

export default List;