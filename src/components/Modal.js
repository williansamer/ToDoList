import React from "react";
import Card from "./Cards";

function Modal(props){

    return(
        <div className="modal">
            {props.children}
        </div>
    )
}

export default Modal;