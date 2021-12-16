import React from "react";
import Card from "./Cards";
import DoneImg from "./DoneImg";
import { useDispatch } from "react-redux";
import { deleteItem, changeDone } from "../actions/actionItem";

function ListItem(props){

    const dispatch = useDispatch();

    return(
        <li>
                    <Card className={props.item.done ? "done item" : "item"} >
                        {props.item.text}
                        <div>
                            <button onClick={()=>{dispatch(changeDone(props.item.id))}}><DoneImg done={props.item.done}></DoneImg></button>
                            <button onClick={()=>{dispatch(deleteItem(props.item.id))}}><img alt="delete" src="/ToDoList/assets/bin.png"></img></button>
                        </div>
                    </Card>
                    </li>
    )
}

export default ListItem;