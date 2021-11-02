import React from "react";
import Card from "./Cards";
import DoneImg from "./DoneImg";

function ListItem(props){

    return(
        <li>
                    <Card className={props.item.done ? "done item" : "item"} >
                        {props.item.text}
                        <div>
                            <button onClick={()=>{props.onDone(props.item)}}><DoneImg done={props.item.done}></DoneImg></button>
                            <button onClick={()=>props.onDeleteItem(props.item)}><img alt="delete" src="../../assets/bin.png"></img></button>
                        </div>
                    </Card>
                    </li>
    )
}

export default ListItem;